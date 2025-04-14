import { getHostingEnv } from "../utils/env.js";
import { proxyToLocalhostAssets } from "./proxy-to-localhost-assets.js";
import { serveProductionAssets } from "./serve-production-assets.js";

export function serveStaticAssets() {
  const hostingEnv = getHostingEnv();

  if (hostingEnv === "localhost") {
    return proxyToLocalhostAssets();
  } else {
    return serveProductionAssets();
  }
}
