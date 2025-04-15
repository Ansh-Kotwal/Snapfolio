import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  server: {
    proxy: { '/api': 'http://localhost:3000' , '/users' : 'http://localhost:3000/api/v1' , '/post' : 'http://localhost:3000/api/v1'}
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
