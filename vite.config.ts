import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  presets: [
    reactCompilerPreset({
      // exclude glob depends on the preset's filter shape — confirm exact option name
      // against your installed version, but the intent is: skip **/*.stories.tsx
    }),
  ],
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),

    dts({ rollupTypes: true }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"], // never bundle peer deps into a component library
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
  resolve: {
    tsconfigPaths: true,
  },
});
