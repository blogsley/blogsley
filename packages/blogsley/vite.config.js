// FILE: vite.config.js

import { defineConfig, loadEnv } from "vite";

import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

import { ViteAliases } from "vite-aliases";

/*import replace from '@rollup/plugin-replace'
import { injectManifest } from 'rollup-plugin-workbox'
//import { generateSW } from 'rollup-plugin-workbox'

import  workboxConfig from './workbox-config'*/
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_"); // Load only VITE_ prefixed env variables

  return {
    root: "./",
    //envDir: 'src/config',
    build: {
      outDir: "dist",
    },
    publicDir: "public",

    plugins: [
      ViteAliases(),
      VitePWA({
        //mode: "development",
        mode: mode,
        base: "/",
        //srcDir: "src/pwa",
        srcDir: "./",
        filename: "sw.js",
        includeAssets: ["/favicon.png"],
        strategies: "injectManifest",

        manifest: {
          name: "Blogsley",
          short_name: "Blogsley",
          description: "Best PWA App in town!",
          display: "standalone",
          orientation: "portrait",
          background_color: "#ffffff",
          theme_color: "#007d7e",
          icons: [
            {
              src: "public/icons/icon-128x128.png",
              sizes: "128x128",
              type: "image/png",
            },
            {
              src: "public/icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "public/icons/icon-256x256.png",
              sizes: "256x256",
              type: "image/png",
            },
            {
              src: "public/icons/icon-384x384.png",
              sizes: "384x384",
              type: "image/png",
            },
            {
              src: "public/icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),

      vue({
        template: { transformAssetUrls },
      }),

      quasar({
        sassVariables: "~css/quasar-variables.scss",
      }),
    ],
    /*define: {
    },*/
  };
});
