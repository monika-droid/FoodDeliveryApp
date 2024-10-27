import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',   // Ensure it runs on the correct host
    port: 3000,          // Change port if needed
    open: true,          // Automatically open browser on server start
    hmr: {
      protocol: 'ws',    // Ensure WebSocket is used for HMR
      port: 3000,        // Optional: specify port for HMR
    },
    watch: {
      usePolling: true,  // Enable polling in case of file system issues
    },
  },
})
