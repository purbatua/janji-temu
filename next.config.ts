import withBundleAnalyzer from "@next/bundle-analyzer"
import { type NextConfig } from "next"

import { env } from "./env.mjs"

const config: NextConfig = {
  // output: "standalone",
  reactStrictMode: true,
  experimental: {
    // nodeMiddleware: true, // canary
    // outputFileTracingIgnores: ["./generated/client/**/*"],
  },
  // outputFileTracingIncludes: {
  //   'prisma': ["./generated/**/*"]
  // },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  allowedDevOrigins: (process.env.CORS_ALLOW_LIST || "").split(","),
  headers: async () => {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: process.env.CORS_ALLOW_LIST ? `http://${process.env.CORS_ALLOW_LIST}` : "", // Set your origin
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version", // "Content-Type, Authorization",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          }
        ],
      },
    ];
  },
  rewrites: async () => [
    { source: "/healthz", destination: "/api/health" },
    { source: "/api/healthz", destination: "/api/health" },
    { source: "/health", destination: "/api/health" },
    { source: "/ping", destination: "/api/health" },
  ],
  
}

export default env.ANALYZE ? withBundleAnalyzer({ enabled: env.ANALYZE })(config) : config
