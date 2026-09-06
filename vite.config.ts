import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const repoBase = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = process.env.VITE_BASE || (repoBase ? `/${repoBase}/` : "/");

export default defineConfig({
  plugins: [react()],
  base,
  preview: { allowedHosts: true },
  server: { allowedHosts: true },
});
