import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ash: "#1a1b1f",
        ashLight: "#23242a",
        neon: "#b026ff",
      },
      boxShadow: {
        neon: "0 0 8px #b026ff, 0 0 16px #b026ff",
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
