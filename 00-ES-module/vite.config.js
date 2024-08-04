import { defineConfig, splitVendorChunkPlugin } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, './src/testSetup.js'),
  },
});
