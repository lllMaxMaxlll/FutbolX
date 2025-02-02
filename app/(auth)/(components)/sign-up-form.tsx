"use client";

import { signUp } from "@/lib/auth-client"; //import the auth client
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { getErrorMessage } from "@/lib/auth-client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { registerFormSchema } from "@/schemas";
import { useState } from "react";

import { LoaderCircle } from "lucide-react";
import SocialMediaButtons from "./social-media-buttons";

export default function SignUpForm() {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof registerFormSchema>>({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	async function onSubmit(values: z.infer<typeof registerFormSchema>) {
		const { name, email, password } = values;

		await signUp.email(
			{
				name,
				email,
				password,
				callbackURL: "/sign-in",
			},
			{
				onRequest: () => {
					setIsLoading(true);
					toast("Creando usuario...");
				},
				onSuccess: () => {
					form.reset();
					setIsLoading(false);
					toast.success("Usuario creado correctamente. Por favor, verifica tu correo electrónico para continuar.");
				},
				onError: (ctx) => {
					console.log(ctx.error);
					toast.error(getErrorMessage(ctx.error.code) ?? "Algo salió mal");
					setIsLoading(false);
				},
			}
		);
	}

	return (
		<div className="flex min-h-[60vh] h-full w-full items-center justify-center px-4">
			<Card className="mx-auto max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl">Crear cuenta</CardTitle>
					<CardDescription>Por favor completa estos datos para continuar</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
							<div className="grid gap-4">
								{/* Name Field */}
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem className="grid gap-2">
											<FormLabel htmlFor="name">Nombre</FormLabel>
											<FormControl>
												<Input id="name" placeholder="Juan Perez" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Email Field */}
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem className="grid gap-2">
											<FormLabel htmlFor="email">Email</FormLabel>
											<FormControl>
												<Input id="email" placeholder="juanperez@mail.com" type="email" autoComplete="email" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Password Field */}
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem className="grid gap-2">
											<FormLabel htmlFor="password">Contraseña</FormLabel>
											<FormControl>
												<Input id="confirmPassword" placeholder="******" type="password" autoComplete="new-password" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Confirm Password Field */}
								<FormField
									control={form.control}
									name="confirmPassword"
									render={({ field }) => (
										<FormItem className="grid gap-2">
											<FormLabel htmlFor="confirmPassword">Confirma tu constraseña</FormLabel>
											<FormControl>
												<Input id="confirmPassword" placeholder="******" type="password" autoComplete="new-password" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button type="submit" className="w-full" disabled={isLoading}>
									{isLoading ? <LoaderCircle className="animate-spin" /> : "Crear cuenta"}
								</Button>
							</div>
						</form>
					</Form>

					<SocialMediaButtons />

					<div className="mt-4 text-center text-sm">
						Ya tenes cuenta?{" "}
						<Link href="/sign-in" className="underline">
							Ingresar
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
