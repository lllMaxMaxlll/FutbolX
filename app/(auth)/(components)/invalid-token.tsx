import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function InvalidToken() {
	return (
		<Card className="container mx-auto h-screen flex flex-col items-center text-center justify-center">
			<CardContent>
				<CardHeader className="flex flex-col items-center space-y-4 ">
					<AlertCircle className="h-16 w-16 text-red-500 " />
					<CardTitle className="text-2xl font-semibold tracking-tight">Token Inválido o Expirado</CardTitle>
					<CardDescription className="text-sm text-muted-foreground">
						Lo sentimos, el enlace para restablecer tu contraseña es inválido o ha expirado.
					</CardDescription>
				</CardHeader>
				<Button asChild>
					<Link href="/forgot-password">Solicitar un nuevo enlace</Link>
				</Button>
			</CardContent>
		</Card>
	);
}
