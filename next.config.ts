import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// On GitHub Pages a project site is served under /<repo>. The deploy workflow
// sets NEXT_PUBLIC_BASE_PATH to "/<repo>"; locally it's empty (served at root).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // fully static HTML for GitHub Pages
  basePath,
  trailingSlash: true, // emit /work/slug/index.html so Pages serves clean URLs
  images: { unoptimized: true },
  // Let .md / .mdx files act as pages and be imported as components.
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  turbopack: { root: __dirname },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
