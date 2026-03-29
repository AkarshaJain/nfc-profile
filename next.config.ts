import type { NextConfig } from "next";

const basePathRaw = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const basePath =
  basePathRaw && basePathRaw !== "" && basePathRaw !== "/"
    ? (basePathRaw.startsWith("/") ? basePathRaw : `/${basePathRaw}`)
    : undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "unavatar.io", pathname: "/**" },
      { protocol: "https", hostname: "avatars.githubusercontent.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
