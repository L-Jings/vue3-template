import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResolve = (dir: string) => resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src'),
      components: pathResolve('./src/components'),
      views: pathResolve('./src/views'),
      assets: pathResolve('./src/assets'),
    }, // 配置
  },
  server: {
    // hostname: '0.0.0.0',
    // host: "192.168.14.168",
    host: 'localhost',
    port: 3000,
    open: true, // boolean | string 设置服务启动时是否自动打开浏览器，当此值为字符串时，会被用作 URL 的路径名
    proxy: {
      // '/api': {
      //   target: 'http://localhost:3333/',
      //   changeOrigin: true,
      //   ws: true,
      //   rewrite: (pathStr) => pathStr.replace('/api', '')
      // },
    },
  },
  base: './', // 打包路径
  build: {
    outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
    terserOptions: {
      compress: {
        // keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true, // 生产环境去除 console
        drop_debugger: true, // 生产环境去除 debugger
      },
    },
    // chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
  },
})
