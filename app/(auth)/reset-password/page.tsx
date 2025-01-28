import type { Metadata } from "next";
import ResetPasswordForm from "../(components)/reset-password-form";

export const metadata: Metadata = {
	title: "Restablecer Contraseña | TourneyMate",
	description: "Restablece tu contraseña para TourneyMate",
};

export default function RestablecerContrasenaPage() {
	return <ResetPasswordForm />;
}
