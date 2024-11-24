import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to the backend server
      '/api': {
        target: 'http://localhost:8080', // Your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: remove "/api" prefix
      },
    },
  },
})
