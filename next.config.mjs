/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS ? "/Code-Circulation" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/Code-Circulation/" : "",
};

export default nextConfig;
