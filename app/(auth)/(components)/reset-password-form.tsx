"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { resetPasswordForSchema } from "@/schemas";
import { authClient } from "@/lib/auth-client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import InvalidToken from "./invalid-token";

function ResetPasswordForm() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	const form = useForm<z.infer<typeof resetPasswordForSchema>>({
		resolver: zodResolver(resetPasswordForSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	async function onSubmit(values: z.infer<typeof resetPasswordForSchema>) {
		const { password } = values;
		await authClient.resetPassword(
			{
				newPassword: password,
				token: token || "",
			},
			{
				onRequest: () => {
					setIsLoading(true);
				},
				onSuccess: () => {
					setIsLoading(false);
					form.reset();
					toast("Contraseña restablecida con éxito.");
					router.push("/sign-in");
				},
				onError: (ctx) => {
					setIsLoading(false);
					console.log(ctx.error);
					toast.error("Error al restablecer la contraseña. Por favor, inténtalo de nuevo.");
				},
			}
		);
	}

	if (!token) {
		return <InvalidToken />;
	}

	return (
		<div className="container mx-auto flex h-screen flex-col items-center justify-center">
			<Card className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
				<CardHeader className="flex flex-col space-y-2 text-center">
					<CardTitle className="text-2xl font-semibold tracking-tight">Restablecer Contraseña</CardTitle>
					<CardDescription className="text-sm text-muted-foreground">Ingresa tu nueva contraseña para restablecerla.</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nueva Contraseña</FormLabel>
										<FormControl>
											<Input type="password" placeholder="********" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="confirmPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Confirmar Nueva Contraseña</FormLabel>
										<FormControl>
											<Input type="password" placeholder="********" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit" className="w-full" disabled={isLoading}>
								{isLoading ? "Restableciendo..." : "Restablecer Contraseña"}
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}

export default function ResetPassword() {
	return (
		<Suspense>
			<ResetPasswordForm />
		</Suspense>
	);
}
