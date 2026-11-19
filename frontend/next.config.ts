import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const isStaticExport = isGithubPages || process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  // Use static export for GitHub Pages or explicit static exports.
  // When running on Vercel, Next.js builds native .next output with automatic static optimization.
  output: isStaticExport ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/Napier" : "",
  assetPrefix: isGithubPages ? "/Napier/" : undefined,
  trailingSlash: true,
};

export default nextConfig;
