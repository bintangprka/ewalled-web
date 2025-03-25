import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/', // Set this if deploying to a subdirectory
  server: {
    port: 5173,
  },
});
