import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  // 解决 Network: use --host to expose
  server: {
    host: "0.0.0.0", //解决“vite use `--host` to expose”
    port: 8080,
    open: true,
  },
  // 解决 @
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
});
