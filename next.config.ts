import type { NextConfig } from 'next';

const withImage=require('next-images')
module.exports = withImage()

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
