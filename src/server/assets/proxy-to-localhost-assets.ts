import * as httpProxyMiddleware from "http-proxy-middleware";
import { getLocalhostAssetsServerPort } from "../utils/env.js";

export function proxyToLocalhostAssets() {
  const localhostAssetServerPort = getLocalhostAssetsServerPort();

  const proxyMiddleware = httpProxyMiddleware.createProxyMiddleware({
    pathFilter: "/",
    target: `http://localhost:${localhostAssetServerPort}`,
  });

  return [proxyMiddleware];
}
