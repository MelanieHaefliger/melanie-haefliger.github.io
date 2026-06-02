import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Let .md / .mdx files act as pages and be imported as components.
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Pin the workspace root (a sibling lockfile exists one level up).
  turbopack: { root: __dirname },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // String form so the plugin is Turbopack-compatible (no JS function passed to Rust).
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
