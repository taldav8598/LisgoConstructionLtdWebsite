import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/LisgoConstructionLtdWebsite",
  plugins: [react()],
  define: {
    "process.env": {},
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
