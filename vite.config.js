import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //  base: 'https://testing.scottcharlesworth.com',
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Expose the server to all network interfaces
    port: 4173, // Ensure the correct port is specified
  },

  preview: {
    allowedHosts: ["squid-app-rzng4.ondigitalocean.app", "geotherm.eco"]
  }
  
})
