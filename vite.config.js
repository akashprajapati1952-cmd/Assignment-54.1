import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Ye line honi chahiye

export default defineConfig({
  base:'Assignment-54.1',
  plugins: [
    react(),
    tailwindcss(), // Ye function yahan hona chahiye
  ],
})
