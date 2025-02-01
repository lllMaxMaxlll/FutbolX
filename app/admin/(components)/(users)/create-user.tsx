"use client";

import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createUserFormSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { getErrorMessage } from "@/lib/auth-client";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useUsers } from "@/context/ListUsersContext";

const CreateUserDialog = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { refreshUsers } = useUsers();

	const form = useForm<z.infer<typeof createUserFormSchema>>({
		resolver: zodResolver(createUserFormSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			role: "user",
		},
	});

	async function onSubmit(values: z.infer<typeof createUserFormSchema>) {
		const { name, email, password, role } = values;

		await authClient.admin
			.createUser(
				{
					name,
					email,
					password,
					role,
				},
				{
					onRequest: () => {
						setIsLoading(true);
						toast("Creando usuario...");
					},
					onSuccess: () => {
						form.reset();
						setIsLoading(false);
						toast.success("Usuario creado correctamente.");
					},
					onError: (ctx) => {
						console.log(ctx.error);
						toast.error(getErrorMessage(ctx.error.code) ?? "Algo salió mal");
						setIsLoading(false);
					},
				}
			)
			.finally(() => {
				refreshUsers();
			});
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Crear usuario</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Crear nuevo usuario</DialogTitle>
					<DialogDescription>Agrega una nueva cuenta de usuario</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
						<FormField
							control={form.control}
							name="role"
							render={({ field }) => (
								<FormItem className="grid gap-2">
									<FormLabel htmlFor="role">Rol</FormLabel>
									<Select {...field} value={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Role" />
											</SelectTrigger>
										</FormControl>
										<SelectContent id="role">
											<SelectItem value="user">Usuario</SelectItem>
											<SelectItem value="admin">Administrador</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter>
							<Button type="submit" disabled={isLoading}>
								Crear usuario
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default CreateUserDialog;
