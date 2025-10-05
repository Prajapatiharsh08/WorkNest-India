/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 ye line add ki gayi hai — ye 'out' folder banayegi

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
