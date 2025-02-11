import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/reactlogin",
  build: {
    rollupOptions: {
      input: "src/main.jsx",
    },
  },
});
