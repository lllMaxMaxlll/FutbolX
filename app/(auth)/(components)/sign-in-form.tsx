"use client";

import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { authClient, getErrorMessage } from "@/lib/auth-client";

import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginFormSchema } from "@/schemas";
import { useState } from "react";

import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa6";
import { LoaderCircle } from "lucide-react";

export default function SignInForm() {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const handleSignIn = async (values: z.infer<typeof loginFormSchema>) => {
		const { email, password } = values;

		await authClient.signIn.email(
			{ email, password, callbackURL: "/dashboard" },
			{
				onRequest: () => {
					toast.loading("Iniciando sesion...");
					setIsLoading(true);
				},
				onSuccess: () => {
					form.reset();
				},
				onError: (ctx) => {
					toast.error(getErrorMessage(ctx.error.code));
					setIsLoading(false);
				},
			}
		);
	};

	return (
		<div className="flex flex-col min-h-[50vh] h-full w-full items-center justify-center px-4">
			<Card className="mx-auto max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl">Iniciar sesion</CardTitle>
					<CardDescription>Ingresa tu email y contraseña para iniciar sesion.</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(handleSignIn)} className="space-y-8">
							<div className="grid gap-4">
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
											<div className="flex justify-between items-center">
												<FormLabel htmlFor="password">Contraseña</FormLabel>
												<Link href="#" className="ml-auto inline-block text-sm underline">
													Olvidaste tu contraseña?
												</Link>
											</div>
											<FormControl>
												<Input id="password" placeholder="******" type="password" autoComplete="password" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button type="submit" className="w-full" disabled={isLoading}>
									{isLoading ? <LoaderCircle className="animate-spin" /> : "Iniciar sesion"}
								</Button>
								<div className="grid grid-cols-3 gap-4">
									<Button variant="outline" className="w-full" disabled>
										<FaApple />
										<span className="sr-only">Iniciar con Apple</span>
									</Button>
									<Button variant="outline" className="w-full">
										<FaGoogle />
										<span className="sr-only">Iniciar con Google</span>
									</Button>
									<Button variant="outline" className="w-full" disabled>
										<FaFacebookF />
										<span className="sr-only">Iniciar con Facebook</span>
									</Button>
								</div>
							</div>
						</form>
					</Form>
					<div className="mt-4 text-center text-sm">
						No tenes cuenta?{" "}
						<Link href="/sign-up" className="underline">
							Registrate
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
