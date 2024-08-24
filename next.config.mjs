/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ddg0cip9uom1w.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
