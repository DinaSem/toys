/** @type {import('next').NextConfig} */
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import withBundleAnalyzer from '@next/bundle-analyzer';

// const bundleAnalyzer = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });
const nextConfig = {
  webpack(config, { dev, isServer }) {
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'));
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: [{ loader: '@svgr/webpack', options: { dimensions: false } }],
      },
    );
    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },

  sassOptions: {
    prependData: `@use "src/app/styles/variables.scss" as *;`,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.NEXT_PUBLIC_DOMAIN_IMAGES}`,
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
};

// export default bundleAnalyzer(nextConfig);
export default nextConfig;
