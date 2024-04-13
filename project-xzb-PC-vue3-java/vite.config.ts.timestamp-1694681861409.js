// vite.config.ts
import { loadEnv } from "vite";
import { viteMockServe } from "vite-plugin-mock";
import createVuePlugin from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import svgLoader from "vite-svg-loader";
import path from "path";
var CWD = process.cwd();
var vite_config_default = ({ mode }) => {
  const { VITE_BASE_URL } = loadEnv(mode, CWD);
  return {
    base: VITE_BASE_URL,
    define: {},
    resolve: {
      alias: {
        "@": path.resolve("E:\\project\\\u5C0F\u667A\u5E2E\\project-xzb-PC-vue3-java\uFF08\u673A\u6784\u7AEF\uFF09", "./src")
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve(
              "src/style/variables.less"
            )}";`
          },
          math: "strict",
          javascriptEnabled: true
        }
      }
    },
    plugins: [
      createVuePlugin(),
      vueJsx(),
      viteMockServe({
        mockPath: "mock",
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
      host: "0.0.0.0",
      open: false,
      hmr: true,
      proxy: {
        "/api": {
          target: "http://172.17.2.58/api",
          changeOrigin: true,
          rewrite: (path2) => path2.replace(/^\/api/, "")
        }
      }
    }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbmZpZ0VudiwgVXNlckNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB7IHZpdGVNb2NrU2VydmUgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJ1xyXG5pbXBvcnQgY3JlYXRlVnVlUGx1Z2luIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5pbXBvcnQgc3ZnTG9hZGVyIGZyb20gJ3ZpdGUtc3ZnLWxvYWRlcidcclxuXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IHdpdGhTY29wZUlkIH0gZnJvbSAndnVlJ1xyXG5cclxuY29uc3QgQ1dEID0gcHJvY2Vzcy5jd2QoKVxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9OiBDb25maWdFbnYpOiBVc2VyQ29uZmlnID0+IHtcclxuICBjb25zdCB7IFZJVEVfQkFTRV9VUkwgfSA9IGxvYWRFbnYobW9kZSwgQ1dEKVxyXG4gIHJldHVybiB7XHJcbiAgICBiYXNlOiBWSVRFX0JBU0VfVVJMLFxyXG4gICAgZGVmaW5lOiB7fSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShcIkU6XFxcXHByb2plY3RcXFxcXHU1QzBGXHU2NjdBXHU1RTJFXFxcXHByb2plY3QteHpiLVBDLXZ1ZTMtamF2YVx1RkYwOFx1NjczQVx1Njc4NFx1N0FFRlx1RkYwOVwiLCAnLi9zcmMnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNzczoge1xyXG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgICAgbGVzczoge1xyXG4gICAgICAgICAgbW9kaWZ5VmFyczoge1xyXG4gICAgICAgICAgICBoYWNrOiBgdHJ1ZTsgQGltcG9ydCAocmVmZXJlbmNlKSBcIiR7cGF0aC5yZXNvbHZlKFxyXG4gICAgICAgICAgICAgICdzcmMvc3R5bGUvdmFyaWFibGVzLmxlc3MnXHJcbiAgICAgICAgICAgICl9XCI7YFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1hdGg6ICdzdHJpY3QnLFxyXG4gICAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICBjcmVhdGVWdWVQbHVnaW4oKSxcclxuICAgICAgdnVlSnN4KCksXHJcbiAgICAgIHZpdGVNb2NrU2VydmUoe1xyXG4gICAgICAgIG1vY2tQYXRoOiAnbW9jaycsXHJcbiAgICAgICAgbG9jYWxFbmFibGVkOiBmYWxzZSxcclxuICAgICAgICBwcm9kRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBzdXBwb3J0VHM6IHRydWUsXHJcbiAgICAgICAgbG9nZ2VyOiB0cnVlLFxyXG4gICAgICAgIGluamVjdENvZGU6IGBcclxuICAgICAgICAgIGltcG9ydCB7IHNldHVwUHJvZE1vY2tTZXJ2ZXIgfSBmcm9tICcuLi9tb2NrUHJvZFNlcnZlcic7XHJcbiAgICAgICAgICBzZXR1cFByb2RNb2NrU2VydmVyKCk7XHJcbiAgICAgICAgYFxyXG4gICAgICB9KSxcclxuICAgICAgc3ZnTG9hZGVyKClcclxuICAgIF0sXHJcblxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgIHBvcnQ6IDYwMDEsXHJcbiAgICAgIGhvc3Q6ICcwLjAuMC4wJyxcclxuICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICAgIGhtcjogdHJ1ZSxcclxuICAgICAgcHJveHk6IHtcclxuICAgICAgICAnL2FwaSc6IHtcclxuICAgICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xNzIuMTcuMi41OC9hcGknLFxyXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKVxyXG4gICAgICAgICAgLy8gYnlwYXNzKHJlcSxyZXMsb3B0aW9ucyl7XHJcbiAgICAgICAgICAvLyAgIGNvbnN0IHByb3h5VXJsID0gbmV3IFVSTCAocmVxLnVybCAsIChvcHRpb25zLnRhcmdldClhcyBzdHJpbmcpPy5ocmVmXHJcbiAgICAgICAgICAvLyAgIHJlcS5oZWFkZXJzWydyZWZlcmVyc3MnXSA9IHByb3h5VXJsXHJcbiAgICAgICAgICAvLyAgIHJlcy5zZXRIZWFkZXIoJ3JlZmVyZXJzcycsIHByb3h5VXJsKVxyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBZ0MsZUFBZTtBQUMvQyxTQUFTLHFCQUFxQjtBQUM5QixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLFlBQVk7QUFDbkIsT0FBTyxlQUFlO0FBRXRCLE9BQU8sVUFBVTtBQUdqQixJQUFNLE1BQU0sUUFBUSxJQUFJO0FBR3hCLElBQU8sc0JBQVEsQ0FBQyxFQUFFLEtBQUssTUFBNkI7QUFDbEQsUUFBTSxFQUFFLGNBQWMsSUFBSSxRQUFRLE1BQU0sR0FBRztBQUMzQyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixRQUFRLENBQUM7QUFBQSxJQUNULFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLDJGQUFtRCxPQUFPO0FBQUEsTUFDOUU7QUFBQSxJQUNGO0FBQUEsSUFFQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixZQUFZO0FBQUEsWUFDVixNQUFNLDhCQUE4QixLQUFLO0FBQUEsY0FDdkM7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsTUFBTTtBQUFBLFVBQ04sbUJBQW1CO0FBQUEsUUFDckI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBRUEsU0FBUztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUEsTUFDaEIsT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLFFBQ1osVUFBVTtBQUFBLFFBQ1YsY0FBYztBQUFBLFFBQ2QsYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLFFBQ1gsUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSWQsQ0FBQztBQUFBLE1BQ0QsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUVBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNMLFFBQVE7QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxVQUNkLFNBQVMsQ0FBQ0EsVUFBU0EsTUFBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLFFBTTlDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbInBhdGgiXQp9Cg==
