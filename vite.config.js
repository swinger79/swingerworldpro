import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: false
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: false,
    allowedHosts: [
      'swingerworldpro-production.up.railway.app',
      'www.swinguerworld.com',
      'swinguerworld.com',
      '.railway.app',
      'localhost'
    ]
  },
  build: {
    minify: 'esbuild',
    outDir: 'dist'
  }
})
