import { z } from "zod";

export const loginFormSchema = z.object({
	email: z.string().email({ message: "Dirección de mail invalida" }),
	password: z
		.string()
		.min(8, { message: "Tu contraseña debe tener al menos 8 caracteres" })
		.regex(/[a-zA-Z0-9]/, { message: "Tu contraseña debe contener letras y al menos un numero" }),
});

export const registerFormSchema = z
	.object({
		name: z.string().min(2, { message: "Tu nombre debe tener al menos 2 caracteres" }),
		email: z.string().email({ message: "Email invalido" }),
		password: z
			.string()
			.min(8, { message: "Tu contraseña debe contener al menos 8 caracteres" })
			.regex(/[a-zA-Z0-9]/, { message: "Tu contraseña debe contener al menos un número" }),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ["confirmPassword"],
		message: "Las contraseñas no coinciden",
	});

export const updateNameFormSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	image: z.string().optional(),
	oldPassword: z.string().min(8, {
		message: "Password must be at least 8 characters.",
	}),
	theme: z.enum(["light", "dark", "system"]),
});

export const updatePasswordFormSchema = z
	.object({
		oldPassword: z
			.string()
			.min(8, { message: "Tu contraseña debe contener al menos 8 caracteres" })
			.regex(/[a-zA-Z0-9]/, { message: "Tu contraseña debe contener al menos un número" }),
		newPassword: z
			.string()
			.min(8, { message: "Tu contraseña debe contener al menos 8 caracteres" })
			.regex(/[a-zA-Z0-9]/, { message: "Tu contraseña debe contener al menos un número" }),
		confirmNewPassword: z
			.string()
			.min(8, { message: "Tu contraseña debe contener al menos 8 caracteres" })
			.regex(/[a-zA-Z0-9]/, { message: "Tu contraseña debe contener al menos un número" }),
	})
	.refine((data) => data.newPassword === data.confirmNewPassword, {
		message: "Las contraseñas no coinciden.",
		path: ["confirmPassword"],
	});
