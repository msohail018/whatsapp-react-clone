import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['tpdmwh2met.us-east-1.awsapprunner.com'],
  },
  server: {
    allowedHosts: ['tpdmwh2met.us-east-1.awsapprunner.com'],
  },
})
