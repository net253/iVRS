import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// eslint-disable-next-line no-undef

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    watch: {
      usePolling: true,
    },
  },
  // resolve: {
  //   // eslint-disable-next-line no-undef
  //   alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  // },
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
