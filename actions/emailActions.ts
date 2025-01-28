import sgMail from "@sendgrid/mail";
import { User } from "better-auth";

type Props = {
	user: User;
	token: string;
};

export const sendVerificationEmail = async ({ user, token }: Props) => {
	// Check for env
	if (!process.env.SENDGRID_API_KEY) throw new Error("SENDGRID_API_KEY is not defined");
	if (!process.env.SENDGRID_FROM_EMAIL) throw new Error("SENDGRID_FROM_EMAIL is not defined");

	const verificationUrl = `${process.env.BETTER_AUTH_URL}/api/auth/verify-email?token=${token}&callbackURL=${process.env.EMAIL_VERIFICATION_CALLBACK_URL}`;

	sgMail.setApiKey(process.env.SENDGRID_API_KEY);

	const message = {
		to: user.email,
		from: process.env.SENDGRID_FROM_EMAIL,
		subject: "Verify your email",
		text: `Click the link to verify your email: ${verificationUrl}`,
		html: `<p>Click the link to verify your email: <a href="${verificationUrl}">Verify email</a></p>`,
	};

	try {
		const [response] = await sgMail.send(message);

		if (response.statusCode !== 202) {
			throw new Error("Error sending verification email");
		}

		return {
			success: true,
			messageId: response.headers["x-message-id"],
		};
	} catch (error) {
		console.error("Error sending email:", error);
		return {
			success: false,
			message: "Error sending verification email. Please try again",
		};
	}
};
