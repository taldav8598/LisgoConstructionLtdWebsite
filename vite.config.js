import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  base: "/LisgoConstructionLtdWebsite",
  define: {
    "process.env": {},
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
