import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

const env = loadEnv('', process.cwd() + '/sub2')

export default defineConfig({
  publicDir: 'dist',
  plugins: [vue()],
  define: {
    'process.env': env,
  },
  server: {
    port: 3002,
    force: false,
     strict:  true,

    // historyApiFallback: {
    //   rewrites: [
    //     { from: /\/sub2\/js\/app\.js$/, to: '/sub2/js/app.js' },
    //     { from: /./, to: '/index.html' },
    //   ],
    // },
  },
  build: {
    lib: {
      entry: '/src/main.js',
      name: 'App1',
      fileName: 'sub2/js/app'
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