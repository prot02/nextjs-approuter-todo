/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config, context) => {
		config.watchOptions = {
			ignored: /node_modules/,
			poll: 1000,
			aggregateTimeout: 300,
		};
		return config;
	},
	images: {
		// 取得を許可する画像のhost一覧
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
