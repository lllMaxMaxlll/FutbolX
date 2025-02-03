import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { nextCookies } from "better-auth/next-js"; // automatically set cookies
// import { emailHarmony } from "better-auth-harmony"; //email normalization and additional validation, blocking temporary email domains.
import { sendEmail } from "@/actions/emailActions";
import { admin, openAPI } from "better-auth/plugins";

const prisma = new PrismaClient();

export const auth = betterAuth({
	secret: process.env.AUTH_SECRET,
	plugins: [nextCookies(), admin(), openAPI()],
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
				html: `<p>Click en el link para restablecer tu contraseña: <a href=${url}>Restablecer contraseña</a></p>`,
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
				html: `<p>Click en el link para verificar tu email: <a href=${verificationUrl}>Verificar mail</a></p>`,
			});
		},
	},

	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
		facebook: {
			clientId: process.env.FACEBOOK_CLIENT_ID as string,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
		},
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
	},
});
