import { sentryVitePlugin } from "@sentry/vite-plugin";
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig,UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from '@tailwindcss/vite'
import path from "path"


declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

const config:UserConfig = {
  server:{
     port: 5558
  },

  plugins: [remix({
    future: {
      v3_fetcherPersist: true,
      v3_relativeSplatPath: true,
      v3_throwAbortReason: true,
      v3_singleFetch: true,
      v3_lazyRouteDiscovery: true,
    },
  }), tsconfigPaths(), tailwindcss(), sentryVitePlugin({
    org: "sentry",
    project: "javascript-remix",
    url: "https://dev-sentry.spanllc.com/"
  })],

  resolve:{
    alias:{
      "@": __dirname,
       "@assets": path.join(__dirname,"assets")
    }
  },

  build: {
    sourcemap: true
  }
};


export default config;