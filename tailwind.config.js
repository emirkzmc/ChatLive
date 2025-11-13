// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Projendeki tüm dosya yollarını buraya ekle
  ],
  theme: {
    extend: {},
  },
  // 1. TAILWIND EKLENTİSİ BURAYA GELİR
  plugins: [
    require('tailwind-scrollbar-hide') 
  ],
}