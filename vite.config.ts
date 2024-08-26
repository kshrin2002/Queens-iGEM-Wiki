// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/queens-canada/',
  plugins: [react()],
  build: {
    outDir: 'public', // Specify the output directory as 'public'
  },
});

