"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/context/UserContext";
import { authClient } from "@/lib/auth-client";
import { updateNameFormSchema } from "@/schemas";
import { User } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, User2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ChangeNameForm = ({ user }: { user: User }) => {
	const { setUser } = useUser();
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof updateNameFormSchema>>({
		resolver: zodResolver(updateNameFormSchema),
		defaultValues: {
			name: user?.name || "",
			image: user?.image || "",
		},
	});

	async function onSubmitName(values: z.infer<typeof updateNameFormSchema>) {
		const { name, image } = values;

		await authClient.updateUser(
			{
				image,
				name,
			},
			{
				onRequest: () => {
					setIsLoading(true);
					toast("Actualizando información...");
				},
				onSuccess: () => {
					toast.success("Información actualizada correctamente");
					setUser((prev) => {
						if (!prev) return null; // Handle null case if needed
						return {
							...prev,
							name,
							image,
						};
					});
					setIsLoading(false);
				},
				onError: (ctx) => {
					toast.error("Error al actualizar la información");
					console.log(ctx.error);
					setIsLoading(false);
				},
			}
		);
	}

	return (
		<Card className="border-0">
			<CardHeader>
				<CardTitle>Información de la cuenta</CardTitle>
				<CardDescription>Ver y editar tu información personal.</CardDescription>
			</CardHeader>
			{/* Basic information => image, name, email */}
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmitName)} className="space-y-4">
						<FormField
							control={form.control}
							name="image"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Imagen de perfil</FormLabel>
									<FormControl>
										<div className="flex items-center space-x-4">
											<Avatar className="w-20 h-20">
												<AvatarImage src={field.value || undefined} alt="Imagen de perfil" />
												<AvatarFallback>
													<User2 className="w-10 h-10" />
												</AvatarFallback>
											</Avatar>
											<div className="grid w-full max-w-sm items-center gap-1.5">
												<Label htmlFor="picture">Imagen</Label>
												<Input id="picture" type="file" />
											</div>
										</div>
									</FormControl>
									<FormDescription>Click en el boton de subir para cargar una imagen.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nombre</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormDescription>El nombre que aparecerá en tu perfil</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input disabled type="email" placeholder={user?.email || ""} />
						</div>

						<Button type="submit" className="my-4 w-20" disabled={isLoading}>
							{isLoading ? <LoaderCircle className="animate-spin" /> : "Guardar"}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default ChangeNameForm;
