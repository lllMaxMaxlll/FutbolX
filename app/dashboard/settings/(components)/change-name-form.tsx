import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "@/context/SessionContext";
import { updateNameFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "lucide-react";
import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ChangeNameForm = () => {
	const { user } = useSession();
	// const [error, action, isPending] = useActionState(onSubmitPassword, null);

	const form = useForm<z.infer<typeof updateNameFormSchema>>({
		resolver: zodResolver(updateNameFormSchema),
		defaultValues: {
			name: user?.name || "",
			image: "",
			theme: "system",
		},
	});

	async function onSubmitName(values: z.infer<typeof updateNameFormSchema>) {
		// For now, we'll just simulate an API call with a timeout
		console.log("Submited name");
		toast("Nombre actualizado");
	}

	useEffect(() => {
		if (user) {
			form.reset({
				name: user.name,
				image: user?.image || "",
			});
		}
	}, [user, form]);

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
													<User className="w-10 h-10" />
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
							<Input disabled type="email" placeholder={user?.email} />
						</div>

						<Button type="submit" className="my-4">
							Guardar
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default ChangeNameForm;
