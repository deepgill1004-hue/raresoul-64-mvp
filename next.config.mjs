/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/raresoul-64-mvp",
  assetPrefix: "/raresoul-64-mvp/",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
