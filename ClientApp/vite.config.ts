import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'


export default defineConfig({
  base: '/dist/',
  build: {
    outDir: '../wwwroot/dist',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        'main': './js/main.js',
        'classic-other': './js/classic-other.js',
        'classic-jquery': './js/classic-jquery.js',
        'react-notes': './js/react-notes.tsx',
        'react-counter' : './js/react-counter.jsx'
      }
    }
  },
  plugins: [
    reactRefresh()
  ],
  server: {
    hmr: {
      protocol: 'ws'
    }
  }
})