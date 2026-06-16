import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Serve root-level "assets" folder as the public directory
  // So assets/logo.png → accessible at /logo.png in the browser
  publicDir: 'assets',
})
  