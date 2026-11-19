import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // In SSR, static pre-rendering, or reduced-motion mode, render standard semantic markup with full visibility
  if (reduce || !mounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
