import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// vitejs.dev
export default defineConfig({
  plugins: [react()],
  // Add this line:
  base: "/lab-one/",
})
