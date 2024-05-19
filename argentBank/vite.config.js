import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/argentBank/" : "/",
  server: {
    historyApiFallback: true, // Activez cette option
  },
});
