/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "server-gmxf.onrender.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
