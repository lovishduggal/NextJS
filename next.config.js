/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'files.stripe.com',
            },
        ],
    },
};

module.exports = nextConfig;
