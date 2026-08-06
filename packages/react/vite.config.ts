import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ["**/*.test.*", "**/*.stories.*"]
    })
  ],

  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MyoFiber",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`
    },

    sourcemap: true,

    emptyOutDir: true,

    rollupOptions: {
      external: ["react", "react-dom"],

      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});