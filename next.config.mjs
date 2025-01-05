/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.themealdb.com',

            },
        ],
    },
    async redirects() {
        return [
            // Basic redirect
            {
                source: '/products/add',
                destination: '/dashboard/products/add',
                permanent: true,
            },

        ]
    },
};

export default nextConfig;
