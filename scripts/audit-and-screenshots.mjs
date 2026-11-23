import { spawn } from 'child_process'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.resolve(rootDir, 'dist')
const screenshotsDir = path.resolve(rootDir, 'docs', 'screenshots')

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true })
}

function createStaticServer(port = 4173) {
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
  }

  const server = http.createServer((req, res) => {
    let reqPath = decodeURIComponent(req.url.split('?')[0])
    if (reqPath === '/') reqPath = '/index.html'

    let filePath = path.join(distDir, reqPath)
    if (!fs.existsSync(filePath)) {
      if (fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html'
      } else {
        filePath = path.join(distDir, 'index.html')
      }
    }

    const ext = path.extname(filePath).toLowerCase()
    const contentType = mimeTypes[ext] || 'application/octet-stream'

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404)
        res.end('Not found')
        return
      }
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(data)
    })
  })

  return new Promise((resolve) => {
    server.listen(port, '127.0.0.1', () => {
      console.log(`Static server running at http://127.0.0.1:${port}`)
      resolve(server)
    })
  })
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl
    this.ws = null
    this.id = 1
    this.callbacks = new Map()
    this.eventListeners = new Map()
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl)
      this.ws.onopen = () => resolve()
      this.ws.onerror = (e) => reject(e)
      this.ws.onmessage = (event) => {
        const msg = JSON.parse(event.data)
        if (msg.id && this.callbacks.has(msg.id)) {
          const { resolve, reject } = this.callbacks.get(msg.id)
          this.callbacks.delete(msg.id)
          if (msg.error) reject(msg.error)
          else resolve(msg.result)
        } else if (msg.method && this.eventListeners.has(msg.method)) {
          for (const cb of this.eventListeners.get(msg.method)) {
            cb(msg.params)
          }
        }
      }
    })
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = this.id++
      this.callbacks.set(msgId, { resolve, reject })
      this.ws.send(JSON.stringify({ id: msgId, method, params }))
    })
  }

  on(method, cb) {
    if (!this.eventListeners.has(method)) {
      this.eventListeners.set(method, [])
    }
    this.eventListeners.get(method).push(cb)
  }

  close() {
    if (this.ws) this.ws.close()
  }
}

async function main() {
  const port = 4173
  const server = await createStaticServer(port)

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  const chromeProcess = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars',
    '--disable-background-networking',
  ])

  let targets = null
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 200))
    try {
      const res = await fetch('http://127.0.0.1:9222/json/list')
      targets = await res.json()
      if (targets && targets.length > 0) break
    } catch {}
  }

  if (!targets || targets.length === 0) {
    console.error('Failed to connect to Chrome debugging port')
    chromeProcess.kill()
    server.close()
    process.exit(1)
  }

  const pageTarget = targets.find((t) => t.type === 'page') || targets[0]
  const cdp = new CDPClient(pageTarget.webSocketDebuggerUrl)
  await cdp.connect()

  await cdp.send('Page.enable')
  await cdp.send('Runtime.enable')

  const consoleLogs = []
  cdp.on('Runtime.consoleAPICalled', (params) => {
    consoleLogs.push({ type: params.type, args: params.args.map((a) => a.value) })
  })

  cdp.on('Runtime.exceptionThrown', (params) => {
    console.error('Browser Exception:', params.exceptionDetails)
    consoleLogs.push({ type: 'error', error: params.exceptionDetails })
  })

  const viewports = [
    { name: 'desktop-1440x900', width: 1440, height: 900, mobile: false },
    { name: 'desktop-1366x768', width: 1366, height: 768, mobile: false },
    { name: 'desktop-1920x1080', width: 1920, height: 1080, mobile: false },
    { name: 'mobile-375x812', width: 375, height: 812, mobile: true },
    { name: 'mobile-390x844', width: 390, height: 844, mobile: true },
    { name: 'mobile-430x932', width: 430, height: 932, mobile: true },
  ]

  const auditResults = []

  for (const vp of viewports) {
    console.log(`\nTesting viewport ${vp.name} (${vp.width}x${vp.height})...`)

    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.mobile,
    })

    const loadPromise = new Promise((resolve) => {
      const handler = () => resolve()
      cdp.on('Page.loadEventFired', handler)
    })

    await cdp.send('Page.navigate', { url: `http://127.0.0.1:${port}/` })
    await loadPromise
    await new Promise((r) => setTimeout(r, 600))

    // Trigger image decoding and scroll to ensure all lazy loaded images resolve
    await cdp.send('Runtime.evaluate', {
      expression: `
        (async () => {
          const imgs = Array.from(document.querySelectorAll('img'));
          await Promise.all(imgs.map(async img => {
            try {
              if (img.loading === 'lazy') {
                img.loading = 'eager';
              }
              await img.decode();
            } catch(e) {}
          }));
        })()
      `,
      awaitPromise: true,
    })
    await new Promise((r) => setTimeout(r, 400))

    // Evaluate layout
    const evalResult = await cdp.send('Runtime.evaluate', {
      expression: `
        (() => {
          const docEl = document.documentElement;
          const body = document.body;
          const windowWidth = window.innerWidth;
          const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
          const hasHorizontalOverflow = scrollWidth > windowWidth;

          // Check broken images
          const brokenImages = [];
          document.querySelectorAll('img').forEach(img => {
            if (img.naturalWidth === 0) {
              brokenImages.push({
                src: img.src,
                alt: img.alt
              });
            }
          });

          // Check anchor links
          const links = Array.from(document.querySelectorAll('a[href]')).map(a => ({
            text: a.textContent.trim().slice(0, 40),
            href: a.getAttribute('href')
          }));

          // Sections check
          const sections = {
            hero: !!document.querySelector('h1'),
            acharyas: !!document.getElementById('acharya-blessings') || !!document.querySelector('section[aria-labelledby*="acharya"]'),
            trustAnnouncement: !!document.getElementById('sacred-trust-announcement'),
            vedicTradition: !!document.getElementById('vedic-tradition'),
            gurukulamLife: !!document.getElementById('gurukulam-life'),
            parayanamPooja: !!document.getElementById('parayanam-pooja-section'),
            moments: !!document.getElementById('gurukulam-moments'),
            finalEnquiry: !!document.getElementById('final-enquiry-cta')
          };

          return {
            windowWidth,
            scrollWidth,
            hasHorizontalOverflow,
            totalImages: document.querySelectorAll('img').length,
            brokenImagesCount: brokenImages.length,
            brokenImages,
            totalLinks: links.length,
            links: links.slice(0, 15),
            sections
          };
        })()
      `,
      returnByValue: true,
    })

    const metrics = evalResult.result.value
    console.log(`  Scroll width: ${metrics.scrollWidth}px vs Window width: ${metrics.windowWidth}px`)
    console.log(`  Horizontal overflow: ${metrics.hasHorizontalOverflow ? 'FAILED' : 'PASSED (0 overflow)'}`)
    console.log(`  Broken images: ${metrics.brokenImagesCount}`)
    console.log(`  Sections present:`, metrics.sections)

    const shot = await cdp.send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false,
    })

    const shotPath = path.join(screenshotsDir, `audit-${vp.name}.png`)
    fs.writeFileSync(shotPath, Buffer.from(shot.data, 'base64'))
    console.log(`  Saved screenshot: ${shotPath}`)

    auditResults.push({
      viewport: vp,
      metrics,
      screenshot: `docs/screenshots/audit-${vp.name}.png`,
    })
  }

  // Section-by-section screenshot capture on desktop (1440px)
  console.log('\nCapturing section-specific screenshots...')
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: false,
  })

  const sectionsToCapture = [
    { id: 'acharyas-blessings', filename: 'acharyas-blessings-card.png', title: 'Acharyas Blessings & Divine Guidance' },
    { id: 'sacred-trust-announcement', filename: 'sacred-trust-redesigned.png', title: 'Sacred Trust Announcement & Objectives' },
    { id: 'vedic-tradition', filename: 'section-01-vedic-tradition.png', title: 'Section 01: Vedic Tradition' },
    { id: 'gurukulam-life', filename: 'section-02-gurukulam-life.png', title: 'Section 02: Life at Gurukulam' },
    { id: 'parayanam-pooja-section', filename: 'section-03-parayanam-pooja.png', title: 'Section 03: Parayanam & Pooja' },
    { id: 'gurukulam-moments', filename: 'section-04-gurukulam-moments.png', title: 'Section 04: Moments at Gurukulam' },
    { id: 'final-enquiry-cta', filename: 'section-05-final-enquiry.png', title: 'Section 05: Final Dual Enquiry CTA' },
  ]

  for (const sec of sectionsToCapture) {
    const rect = await cdp.send('Runtime.evaluate', {
      expression: `
        (() => {
          const el = document.getElementById('${sec.id}');
          if (!el) return null;
          el.scrollIntoView({ behavior: 'instant', block: 'start' });
          const b = el.getBoundingClientRect();
          return {
            x: b.left + window.scrollX,
            y: b.top + window.scrollY,
            width: b.width,
            height: b.height
          };
        })()
      `,
      returnByValue: true,
    })

    if (rect.result.value) {
      await new Promise((r) => setTimeout(r, 400))
      const secClip = rect.result.value
      const secShot = await cdp.send('Page.captureScreenshot', {
        format: 'png',
        clip: {
          x: 0,
          y: secClip.y,
          width: 1440,
          height: secClip.height,
          scale: 1,
        },
        captureBeyondViewport: true,
      })
      const secPath = path.join(screenshotsDir, sec.filename)
      fs.writeFileSync(secPath, Buffer.from(secShot.data, 'base64'))
      console.log(`  Saved ${sec.title}: ${secPath} (${Math.round(secClip.height)}px height)`)
    }
  }

  // Capture full continuous desktop page screenshot
  console.log('\nCapturing full continuous desktop screenshot...')
  const layoutMetrics = await cdp.send('Page.getLayoutMetrics')
  const contentHeight = Math.ceil(layoutMetrics.contentSize.height)

  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: contentHeight,
    deviceScaleFactor: 1,
    mobile: false,
  })

  await new Promise((r) => setTimeout(r, 500))

  const fullShot = await cdp.send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true,
  })
  const fullShotPath = path.join(screenshotsDir, 'homepage-complete-1440px.png')
  fs.writeFileSync(fullShotPath, Buffer.from(fullShot.data, 'base64'))
  console.log(`Saved full continuous screenshot: ${fullShotPath} (${contentHeight}px height)`)

  fs.writeFileSync(
    path.join(rootDir, 'docs', 'audit-results.json'),
    JSON.stringify({ auditResults, consoleLogs }, null, 2)
  )

  cdp.close()
  chromeProcess.kill()
  server.close()
  console.log('\nAudit complete! All results and screenshots saved successfully.')
}

main().catch((err) => {
  console.error('Audit script failed:', err)
  process.exit(1)
})
