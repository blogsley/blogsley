// FILE: vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

import { ViteAliases } from 'vite-aliases'

// https://vitejs.dev/config/
export default defineConfig({
  root: './',     
  build: {       
     outDir: 'dist',
  },
  publicDir: 'public',

  plugins: [
    ViteAliases(),

    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      sassVariables: '~/quasar-variables.scss'
    })
  ]
})
