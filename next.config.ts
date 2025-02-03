import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "wfriamwjdtxslgskjtsw.supabase.co",
				port: "",
				pathname: "/storage/v1/object/public/images/**",
			},
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
		],
	},
};

export default nextConfig;
