import { ConfigEnv, UserConfig, loadEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import createVuePlugin from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'

import path from 'path'
import { withScopeId } from 'vue'

const CWD = process.cwd()

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const { VITE_BASE_URL } = loadEnv(mode, CWD)
  return {
    base: VITE_BASE_URL,
    define: {},
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },

    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve(
              'src/style/variables.less'
            )}";`
          },
          math: 'strict',
          javascriptEnabled: true
        }
      }
    },

    plugins: [
      createVuePlugin(),
      vueJsx(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: false,
        prodEnabled: true,
        supportTs: true,
        logger: true,
        injectCode: `
          import { setupProdMockServer } from '../mockProdServer';
          setupProdMockServer();
        `
      }),
      svgLoader()
    ],

    server: {
      port: 6001,
      host: '0.0.0.0',
      open: false,
      hmr: true,
      proxy: {
        '/api': {
          target: 'http://localhost:11500',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
          // https://jzo2o-institution-test.itheima.net/api
          // http://172.17.2.58/api
          // bypass(req,res,options){
          //   const proxyUrl = new URL (req.url , (options.target)as string)?.href
          //   req.headers['refererss'] = proxyUrl
          //   res.setHeader('refererss', proxyUrl)
          // }
        }
      }
    }
  }
}
