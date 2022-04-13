import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/lib.ts',
      formats: ['es'],
      fileName: 'sdk',
    },
    rollupOptions: {
      external: [/^lit/, 'axios', 'js-cookie'],
    },
  },
  optimizeDeps: {
    exclude: ['lit'],
  },
})
