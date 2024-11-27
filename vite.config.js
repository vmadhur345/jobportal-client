import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Ensures the server is accessible externally (0.0.0.0)
    strictPort: true, // Ensures Vite uses the exact port specified (no random port selection)
    port: process.env.PORT || 3000, // Uses the PORT from Render environment or defaults to 3000
  },
});
