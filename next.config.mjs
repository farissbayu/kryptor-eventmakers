/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-7b7153db905041f797194b1a5ea73784.r2.dev",
        pathname: "/kryptor-eventmakers/**",
      },
    ],
  },
};

export default nextConfig;
