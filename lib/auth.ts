import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { nextCookies } from "better-auth/next-js"; // automatically set cookies
// import { emailHarmony } from "better-auth-harmony"; //email normalization and additional validation, blocking temporary email domains.
import { sendVerificationEmail } from "@/actions/emailActions";

const prisma = new PrismaClient();

export const auth = betterAuth({
	secret: process.env.AUTH_SECRET,
	plugins: [nextCookies()],
	database: prismaAdapter(prisma, {
		provider: "postgresql",
	}),
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true,
	},
	emailVerification: {
		enabled: true,
		sendOnSignUp: true,
		autoSignInAfterVerification: true,
		sendVerificationEmail: async ({ user, token }) => {
			// Send verification email
			await sendVerificationEmail({ user, token });
		},
	},
	// socialProviders: {
	// 	github: {
	// 		clientId: process.env.GITHUB_CLIENT_ID,
	// 		clientSecret: process.env.GITHUB_CLIENT_SECRET,
	// 	},
	// },
});
