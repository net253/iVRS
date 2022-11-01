import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//const path = require("path");

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    watch: {
      usePolling: true,
    },
  },
});

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3001,
//     watch: {
//       usePolling: true,
//     },
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
//   build: {
//     chunkSizeWarningLimit: 1000,
//   },
// });
