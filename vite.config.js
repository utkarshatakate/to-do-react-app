import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    
    optimizeDeps: {
      include: ['@mui/icons-material', '@mui/material', '@emotion/react', '@emotion/styled'],
    },
  },
})
