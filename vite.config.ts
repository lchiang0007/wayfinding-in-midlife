import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/",
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
  },
  tanstackStart: {
    spa: {},
  },
});