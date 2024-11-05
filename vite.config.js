import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://213.173.108.29:12929',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});