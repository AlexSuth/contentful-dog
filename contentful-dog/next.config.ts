/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"], // <-- allow Contentful images
  },
};

module.exports = nextConfig;
