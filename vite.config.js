import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.js",
      name: "zyjDebouncePlugin",
      fileName: "zyj-debounce-plugin"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "vue"
        }
      }
    }
  }
});