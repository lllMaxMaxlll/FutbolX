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
	name: z.string().min(2, { message: "Tu nombre debe tener al menos 2 caracteres" }),
	image: z.string().optional(),
});

export const updatePasswordFormSchema = z
	.object({
		currentPassword: z
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

export const forgotPasswordFormSchema = z.object({
	email: z.string().email({
		message: "Por favor, ingresa un correo electrónico válido.",
	}),
});

export const resetPasswordForSchema = z
	.object({
		password: z
			.string()
			.min(8, { message: "Tu contraseña debe contener al menos 8 caracteres" })
			.regex(/[a-zA-Z0-9]/, { message: "Tu contraseña debe contener al menos un número" }),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Las contraseñas no coinciden.",
		path: ["confirmPassword"],
	});

export const createUserFormSchema = z.object({
	name: z.string().min(2, { message: "Tu nombre debe tener al menos 2 caracteres" }),
	email: z.string().email({ message: "Email invalido" }),
	password: z
		.string()
		.min(8, { message: "Tu contraseña debe contener al menos 8 caracteres" })
		.regex(/[a-zA-Z0-9]/, { message: "Tu contraseña debe contener al menos un número" }),
	role: z.enum(["user", "admin"]).default("user"),
});
