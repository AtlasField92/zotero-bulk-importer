// Vite configuration dedicated to static build (SPA prerendered).
// Alternative method: use the TanStack Start plugin directly
// because @lovable.dev/vite-tanstack-config in static mode might have
// a mismatch on the server file name for the prerender.
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      target: "static",
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
      spa: {
        enabled: true,
      },
    }),
    react(),
  ],
});
