"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { forgotPasswordFormSchema } from "@/schemas";
import { authClient } from "@/lib/auth-client";

export default function ForgotPasswordForm() {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
		resolver: zodResolver(forgotPasswordFormSchema),
		defaultValues: {
			email: "",
		},
	});

	async function onSubmit(values: z.infer<typeof forgotPasswordFormSchema>) {
		const { email } = values;

		await authClient.forgetPassword(
			{
				email,
				redirectTo: "/reset-password",
			},
			{
				onRequest: () => {
					setIsLoading(true);
				},
				onSuccess: () => {
					setIsLoading(false);
					form.reset();
					toast("Se ha enviado un enlace de restablecimiento de contraseña a tu correo electrónico.");
				},
				onError: () => {
					setIsLoading(false);
					toast.error("Error al enviar el correo electrónico. Por favor, inténtalo de nuevo.");
				},
			}
		);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Correo Electrónico</FormLabel>
							<FormControl>
								<Input placeholder="nombre@email.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full" disabled={isLoading}>
					{isLoading ? "Enviando..." : "Enviar enlace de restablecimiento"}
				</Button>
			</form>
		</Form>
	);
}
