import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginMd from 'vite-plugin-md'

export default defineConfig({
  plugins: [react(), vitePluginMd()],
  assetsInclude: ['/.md', '/.JPG'],
  base: '/beaconfinal/',
})