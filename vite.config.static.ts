// Vite configuration dedicated to static build (SPA prerendered).
// Alternative method: use the TanStack Start plugin directly
// because @lovable.dev/vite-tanstack-config in static mode might have
// a mismatch on the server file name for the prerender.
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// Set VITE_BASE_PATH env var at build time to deploy under a subpath.
// Example: VITE_BASE_PATH=/zotero-bulk-importer/ npm run build
const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  base,
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
