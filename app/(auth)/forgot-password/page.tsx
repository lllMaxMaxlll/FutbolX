import type { Metadata } from "next";
import ForgotPasswordForm from "../(components)/forgot-password-form";

export const metadata: Metadata = {
	title: "Olvidé mi Contraseña | TourneyMate",
	description: "Restablece tu contraseña para TourneyMate",
};

export default function ForgotPasswordPage() {
	return (
		<div className="container mx-auto flex h-screen flex-col items-center justify-center">
			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
				<div className="flex flex-col space-y-2 text-center">
					<h1 className="text-2xl font-semibold tracking-tight">Olvidé mi Contraseña</h1>
					<p className="text-sm text-muted-foreground">
						Ingresa tu correo electrónico para recibir un enlace de restablecimiento de contraseña.
					</p>
				</div>
				<ForgotPasswordForm />
			</div>
		</div>
	);
}
