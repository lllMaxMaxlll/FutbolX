import { z } from "zod";

export const loginFormSchema = z.object({
	email: z.string().email({ message: "Dirección de mail invalida" }),
	password: z
		.string()
		.min(6, { message: "Tu contraseña debe tener al menos 6 caracteres" })
		.regex(/[a-zA-Z0-9]/, { message: "Tu contraseña debe contener letras y al menos un numero" }),
});

export const registerFormSchema = z
	.object({
		name: z.string().min(2, { message: "Tu nombre debe tener al menos 2 caracteres" }),
		email: z.string().email({ message: "Email invalido" }),
		password: z
			.string()
			.min(6, { message: "Tu contraseña debe contener al menos 6 caracteres" })
			.regex(/[a-zA-Z0-9]/, { message: "Tu contraseña debe contener al menos un número" }),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ["confirmPassword"],
		message: "Las contraseñas no coinciden",
	});
