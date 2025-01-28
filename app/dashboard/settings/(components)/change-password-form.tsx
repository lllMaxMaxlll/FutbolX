import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { updatePasswordFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ChangePasswordForm = () => {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof updatePasswordFormSchema>>({
		resolver: zodResolver(updatePasswordFormSchema),
		defaultValues: {
			currentPassword: "",
			newPassword: "",
			confirmNewPassword: "",
		},
	});

	async function onSubmitPassword(values: z.infer<typeof updatePasswordFormSchema>) {
		const { currentPassword, newPassword } = values;
		await authClient.changePassword(
			{
				newPassword,
				currentPassword,
				revokeOtherSessions: true, // revoke all other sessions the user is signed into
			},
			{
				onRequest: () => {
					setIsLoading(true);
					toast.info("Cambiando contraseña...");
				},
				onSuccess: () => {
					toast.success("Contraseña cambiada con éxito");
					form.reset();
					setIsLoading(false);
				},
				onError: (ctx) => {
					toast.error(ctx.error.message);
					setIsLoading(false);
				},
			}
		);
	}

	return (
		<Card className="border-0 ">
			<CardHeader>
				<CardTitle>Contraseña</CardTitle>
				<CardDescription>Actualiza la contraseña de tu cuenta para manternerla segura.</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form className="space-y-4" onSubmit={form.handleSubmit(onSubmitPassword)}>
						<FormField
							control={form.control}
							name="currentPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Contraseña actual</FormLabel>
									<FormControl>
										<Input type="password" {...field} />
									</FormControl>
									<FormDescription>Ingresa tu contraseña actual para ingresar una nueva</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="newPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nueva contraseña</FormLabel>
									<FormControl>
										<Input type="password" {...field} />
									</FormControl>
									<FormDescription>Ingresa tu nueva contraseña.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="confirmNewPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirmar nueva contraseña</FormLabel>
									<FormControl>
										<Input type="password" {...field} />
									</FormControl>
									<FormDescription>Ingresá nuevamente tu nueva contraseña.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="my-4 w-20" disabled={isLoading}>
							{isLoading ? <LoaderCircle className="animate-spin" /> : "Guardar"}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default ChangePasswordForm;
