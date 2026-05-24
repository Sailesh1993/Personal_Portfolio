import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Personal_Portfolio/', // This must match your GitHub repo name exactly
  build: {
    outDir: 'dist', // Vite's default, replaces CRA's 'build' folder
  }
});