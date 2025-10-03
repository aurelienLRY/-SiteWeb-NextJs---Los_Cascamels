import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisations pour réduire l'utilisation mémoire
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  
  // Configuration des images optimisée
  images: {
    remotePatterns: [
      {
        hostname: "api.dicebear.com",
      },
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "placehold.co",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Limiter la taille des images pour économiser la mémoire
    formats: ['image/webp', 'image/avif'],
  },

  // Optimisations de compilation
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Configuration expérimentale pour réduire l'utilisation mémoire
  experimental: {
    optimizePackageImports: ['@/components'],
  },
};

export default nextConfig;
