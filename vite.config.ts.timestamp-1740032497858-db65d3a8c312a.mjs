// vite.config.ts
import { vitePlugin as remix } from "file:///D:/Projects/Websites/moonsoftware-remix/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///D:/Projects/Websites/moonsoftware-remix/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///D:/Projects/Websites/moonsoftware-remix/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { flatRoutes } from "file:///D:/Projects/Websites/moonsoftware-remix/node_modules/remix-flat-routes/dist/index.cjs";
var vite_config_default = defineConfig({
  plugins: [
    remix({
      routes(defineRoutes) {
        return flatRoutes("routes", defineRoutes);
      },
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true
      }
    }),
    tsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxXZWJzaXRlc1xcXFxtb29uc29mdHdhcmUtcmVtaXhcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXFdlYnNpdGVzXFxcXG1vb25zb2Z0d2FyZS1yZW1peFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdHMvV2Vic2l0ZXMvbW9vbnNvZnR3YXJlLXJlbWl4L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgdml0ZVBsdWdpbiBhcyByZW1peCB9IGZyb20gXCJAcmVtaXgtcnVuL2RldlwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5pbXBvcnQgeyBmbGF0Um91dGVzIH0gZnJvbSBcInJlbWl4LWZsYXQtcm91dGVzXCI7XG5cbmRlY2xhcmUgbW9kdWxlIFwiQHJlbWl4LXJ1bi9ub2RlXCIge1xuICBpbnRlcmZhY2UgRnV0dXJlIHtcbiAgICB2M19zaW5nbGVGZXRjaDogdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVtaXgoe1xuICAgICAgcm91dGVzKGRlZmluZVJvdXRlcykge1xuICAgICAgICByZXR1cm4gZmxhdFJvdXRlcyhcInJvdXRlc1wiLCBkZWZpbmVSb3V0ZXMpXG4gICAgICB9LCBcbiAgICAgIGZ1dHVyZToge1xuICAgICAgICB2M19mZXRjaGVyUGVyc2lzdDogdHJ1ZSxcbiAgICAgICAgdjNfcmVsYXRpdmVTcGxhdFBhdGg6IHRydWUsXG4gICAgICAgIHYzX3Rocm93QWJvcnRSZWFzb246IHRydWUsXG4gICAgICAgIHYzX3NpbmdsZUZldGNoOiB0cnVlLFxuICAgICAgICB2M19sYXp5Um91dGVEaXNjb3Zlcnk6IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErUyxTQUFTLGNBQWMsYUFBYTtBQUNuVixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLGtCQUFrQjtBQVEzQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSixPQUFPLGNBQWM7QUFDbkIsZUFBTyxXQUFXLFVBQVUsWUFBWTtBQUFBLE1BQzFDO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixtQkFBbUI7QUFBQSxRQUNuQixzQkFBc0I7QUFBQSxRQUN0QixxQkFBcUI7QUFBQSxRQUNyQixnQkFBZ0I7QUFBQSxRQUNoQix1QkFBdUI7QUFBQSxNQUN6QjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
