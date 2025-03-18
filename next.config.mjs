/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "codeit.com.np",
      },
      {
        protocol: "https",
        hostname: "imgs.search.brave.com",
      },
      {
        protocol: "https",
        hostname: "scontent.fktm19-1.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "media.geeksforgeeks.org",
      },
      {
        protocol: "https",
        hostname: "scontent.fbir4-1.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "scontent.fbir4-2.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;