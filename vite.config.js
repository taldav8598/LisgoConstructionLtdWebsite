import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// /https://taldav8598.github.io/LisgoConstructionLtdWebsite

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  define: {
    "process.env": {},
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
