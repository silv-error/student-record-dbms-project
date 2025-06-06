import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
  ],
  server: {
    port: 8000,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      }
    }
  }
})
