import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';
import * as path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), Components({
    resolvers: [PrimeVueResolver()],
  })],
  resolve: {
    alias: {
      '@composables': path.resolve(__dirname, 'src/composables'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    }
  },

})
