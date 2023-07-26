/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Add more domains if needed
    // Optional: Add your custom loader for specific image sources if required
    loader: "default",
  },
};

module.exports = nextConfig;
