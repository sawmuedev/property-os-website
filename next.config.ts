import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimierungen für Production
  compress: true,
  poweredByHeader: false,

  // Optional: Für statisches Export (uncomment wenn gewünscht)
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // }
};

export default nextConfig;
