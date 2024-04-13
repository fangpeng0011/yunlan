import { defineConfig } from 'vite'
import uni from "@dcloudio/vite-plugin-uni";

export default defineConfig({
  plugins: [
    uni()
  ],
  server: {
    "port" : 8080,
    proxy : {
      "/api" : {
        target: 'http://192.168.101.1:11500',
        changeOrigin : true,
        rewrite : (path) => path.replace(/^\/api/, "")
      }
    }
  }
})