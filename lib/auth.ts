import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { nextCookies } from "better-auth/next-js"; // automatically set cookies
// import { emailHarmony } from "better-auth-harmony"; //email normalization and additional validation, blocking temporary email domains.
import { sendEmail } from "@/actions/emailActions";

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
		sendResetPassword: async ({ user, url }) => {
			await sendEmail({
				to: user.email,
				subject: "Reestablecer contraseña",
				text: `Click en el link para restablecer tu contraseña: ${url}`,
			});
		},
	},
	emailVerification: {
		enabled: true,
		sendOnSignUp: true,
		autoSignInAfterVerification: true,
		sendVerificationEmail: async ({ user, token }) => {
			const verificationUrl = `${process.env.BETTER_AUTH_URL}/api/auth/verify-email?token=${token}&callbackURL=${process.env.EMAIL_VERIFICATION_CALLBACK_URL}`;
			await sendEmail({
				to: user.email,
				subject: "Verifica tu email",
				text: `Click en el link para verificar tu email: ${verificationUrl}`,
			});
		},
	},

	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
		// facebook: {
		// 	clientId: process.env.FACEBOOK_CLIENT_ID as string,
		// 	clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
		// },
	},
});
