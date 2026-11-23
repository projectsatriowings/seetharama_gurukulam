import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/.vite-react-ssg-temp/**', '**/dist/**'],
    },
  },
  build: { chunkSizeWarningLimit: 800 },
})
