import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  publicDir: 'dist', // Add this line
  define: {
    'process.env': import.meta.env,
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('app1-') || tag.startsWith('app2-')
        }
      }
    })
  ],
  server: {
    force: false,

    proxy: {
      '/app1': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/app1/, '')
      },
      '/app2': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/app2/, '')
      },
    },
    port: 3000,
  }
})

