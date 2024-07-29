import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
  env: {
    metadataBase: 'http://localhost:3000', // or your production URL
  },
};

export default withContentlayer(nextConfig);
