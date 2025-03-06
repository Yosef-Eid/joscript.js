import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),  // استخدام Tailwind CSS في المكتبة
  ],
  server: {
    watch: { usePolling: true },
    hmr: true,
    open: true,
  },
  build: {
    lib: {
      entry: './src/jo/jo.js',  // نقطة الدخول للمكتبة
      name: 'joscript',  // اسم المكتبة
      fileName: (format) => `jo.${format}.js`,  // تسمية الملفات المُصنعة
      formats: ['es', 'cjs'],  // إنشاء ملفات ES Modules و CommonJS
    },
    rollupOptions: {
      external: [],  // لا تقم باستبعاد Tailwind CSS
      output: {
        globals: {},  // لا حاجة لتعريف globals
      },
    },
  },
});