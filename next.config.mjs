/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
          config.resolve.alias.canvas = false;
        
          return config;
        },
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'catbox.moe',
            },
          ],
        },
};

export default nextConfig;
