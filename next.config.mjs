/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export with next/image
  },
  // Optional: if you want to ignore ESLint errors during build
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // Optional: if you want to ignore TypeScript errors during build
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

export default nextConfig;
