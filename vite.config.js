import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
    strictPort: false,
    hmr: {
      clientPort: process.env.PORT || 8080
    }
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
    strictPort: false,
    proxy: {}
  },
  build: {
    minify: 'esbuild',
    outDir: 'dist'
  }
})
