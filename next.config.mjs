/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  output: 'export',
  images: { unoptimized: true }
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname,
  //       pathname: '**'
  //     }
  //   ]
  // }
}

export default nextConfig
