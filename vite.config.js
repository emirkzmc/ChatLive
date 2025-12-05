// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // 👈 BU SATIR EKLENMELİ!

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // @/ takma adını src klasörüne eşitleyin
      '@': path.resolve(__dirname, './src'),
    },
  },
})