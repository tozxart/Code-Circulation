/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/Code-Circulation" : "",
  assetPrefix: isProd ? "/Code-Circulation/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
