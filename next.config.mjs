/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: "https://nzvgvnjpskriofigqjuj.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56dmd2bmpwc2tyaW9maWdxanVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxNDUzMDksImV4cCI6MjA0MTcyMTMwOX0.L7MM_HtuwWfEUwf0S3b8Ex19_eIu0-JqgosH9Dr2RB8",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lectrum.ua",
      },
      {
        protocol: "https",
        hostname: "placeimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
      },
    ],
  },
};

export default nextConfig;
