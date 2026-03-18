/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // <- tells Next.js to build a static site
    distDir: ".vercel/output/static", // <- optional, aligns with Vercel's expectation
  };
  
  module.exports = nextConfig;