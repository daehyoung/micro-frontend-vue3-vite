import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

const env = loadEnv('', process.cwd() + '/sub1')

export default defineConfig({
  publicDir: 'dist',
  plugins: [vue()],
  define: {
    'process.env': env,
  },
  server: {
    port: 3001,
    force: false,
     strict:  true,

    // historyApiFallback: {
    //   rewrites: [
    //     { from: /\/sub1\/js\/app\.js$/, to: '/sub1/js/app.js' },
    //     { from: /./, to: '/index.html' },
    //   ],
    // },
  },
  build: {
    lib: {
      entry: '/src/main.js',
      name: 'App1',
      fileName: 'sub1/js/app'
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
})