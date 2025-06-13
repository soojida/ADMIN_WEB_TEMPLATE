import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@tiptap/react", "@tiptap/starter-kit"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: true, // 또는 내부 IP 직접 지정 가능
    port: 5173, // 원하는 포트 번호
  },
});
