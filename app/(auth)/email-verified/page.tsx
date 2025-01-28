import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function EmailVerifiedPage() {
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<div className="max-w-md w-full p-8 rounded-lg shadow-lg text-center">
				<div className="flex justify-center">
					<CheckCircle2 className="h-16 w-16 text-green-500" />
				</div>

				<h1 className="mt-6 text-2xl font-bold">Email verificado con éxito!</h1>

				<p className="mt-2 text-sm">Tu cuenta a sido verificada</p>

				<div className="mt-8">
					<Link href="/dashboard">
						<Button className="w-full">Continuar a la pagina principal</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
