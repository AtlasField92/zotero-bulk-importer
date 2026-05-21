import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // Use VITE_BASE_PATH at build time to handle GitHub Pages subpath deployments.
  // e.g. https://atlasfield92.github.io/zotero-bulk-importer/
  const basepath = import.meta.env.BASE_URL ?? "/";

  const router = createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
