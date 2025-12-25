import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow ALL https domains
      },
      {
        protocol: "http",
        hostname: "**", // allow ALL http domains (if needed)
      },
    ],
  },
};

export default nextConfig;
