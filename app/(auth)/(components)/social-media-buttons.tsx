import { getErrorMessage, signIn } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "sonner";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function SocialMediaButtons() {
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmitGoogle = async () => {
		await signIn
			.social(
				{ provider: "google", callbackURL: "/dashboard" },
				{
					onRequest: () => {
						setIsLoading(true);
						toast("Iniciando sesion...");
					},
					onError: (ctx) => {
						setIsLoading(false);
						toast.error(getErrorMessage(ctx.error.code) ?? "Algo salió mal");
					},
				}
			)
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div className="grid grid-cols-3 gap-4 my-4">
			<Button variant="outline" className="w-full" disabled>
				<FaApple />
				<span className="sr-only">Iniciar con Apple</span>
			</Button>
			<Button variant="outline" className="w-full" onClick={handleSubmitGoogle} disabled={isLoading}>
				<FaGoogle />
				<span className="sr-only">Iniciar con Google</span>
			</Button>
			<Button variant="outline" className="w-full" disabled>
				<FaFacebookF />
				<span className="sr-only">Iniciar con Facebook</span>
			</Button>
		</div>
	);
}
