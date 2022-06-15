/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com'],
    },
    env: {
        MONGO_URL:
            'mongodb+srv://FoodApp:FoodApp@cluster0.wo0me.mongodb.net/?retryWrites=true&w=majority',
        ADMIN_USERNAME: 'admin',
        ADMIN_PASSWORD: '123456',
        TOKEN: 'FJ6Y56652][DLFJDFH]FHF224',
        BASE_URL: 'https://food-ordering-app-one.vercel.app/api',
    },
};

module.exports = nextConfig;
