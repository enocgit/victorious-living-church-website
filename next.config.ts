import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "simpleicons.org",
      },
    ],
  },
};

export default nextConfig;
