import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 1533,
    open: true
  },
  plugins: [react()],
  base: "/dist",
  build: {
    outDir: "./dist",
    assetsDir: "./assets/"
  }
})
