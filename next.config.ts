import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
  dangerouslyAllowSVG: true,
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**', // Match all domains
    }
  ]
 }
};

export default nextConfig;
