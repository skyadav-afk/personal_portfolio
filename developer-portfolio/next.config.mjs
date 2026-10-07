// Served from https://<user>.github.io/personal_portfolio/ by GitHub Pages
const basePath = "/personal_portfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // The deploy workflow uploads developer-portfolio/dist
  distDir: "dist",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
