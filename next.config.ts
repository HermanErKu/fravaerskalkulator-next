import type { NextConfig } from "next"
import withPWA from "next-pwa"

const nextConfig: NextConfig = {
  reactStrictMode: true
}

// Wrapp configen med withPWA
export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development"
})(nextConfig)
