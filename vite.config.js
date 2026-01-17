# Vite Configuration for Development

import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  plugins: [
    laravel({
      input: ['resources/js/Pages/app.tsx', 'resources/js/Pages/**/*.tsx'],
      ssr: false,
      refresh: true,
      buildDirectory: 'public/build',
    }),
  ],
  resolve: {
    alias: {
      '@': '/Users/nate/src/gracemn-sites/src/gracemn/resources/js',
    },
  },
  server: {
    host: null,
    port: 5173,
    strictPort: true,
    origin: 'http://localhost:8000',
    hmr: {
      client: 'http://localhost:5173',
    },
  },
  build: {
    manifest: true,
    outDir: 'public/build',
    rollupOptions: {
      output: {
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]',
      },
    },
  },
  define: {
    'process.env.VITE_APP_URL': JSON.stringify(command.env.VITE_APP_URL || 'http://localhost:5173'),
    'process.env.VITE_PUSHER_APP_URL': JSON.stringify(command.env.VITE_PUSHER_APP_URL || 'http://localhost:8000'),
  },
});