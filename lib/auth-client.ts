import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: process.env.PUBLIC_URL,
});

type ErrorTypes = Partial<Record<keyof typeof authClient.$ERROR_CODES, string>>;

const errorCodes = {
	USER_NOT_FOUND: "Usuario no encontrado",
	FAILED_TO_CREATE_USER: "Error al crear usuario",
	FAILED_TO_CREATE_SESSION: "Error al crear sesión",
	FAILED_TO_UPDATE_USER: "Error al actualizar usuario",
	FAILED_TO_GET_SESSION: "Error al obtener sesión",
	INVALID_PASSWORD: "Contraseña inválida",
	INVALID_EMAIL: "Correo electrónico inválido",
	INVALID_EMAIL_OR_PASSWORD: "Correo electrónico o contraseña inválidos",
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Cuenta social ya vinculada",
	PROVIDER_NOT_FOUND: "Proveedor no encontrado",
	INVALID_TOKEN: "Token inválido",
	ID_TOKEN_NOT_SUPPORTED: "ID Token no soportado",
	FAILED_TO_GET_USER_INFO: "Error al obtener información del usuario",
	USER_EMAIL_NOT_FOUND: "Correo electrónico del usuario no encontrado",
	EMAIL_NOT_VERIFIED: "Correo electrónico no verificado",
	PASSWORD_TOO_SHORT: "Contraseña demasiado corta",
	PASSWORD_TOO_LONG: "Contraseña demasiado larga",
	USER_ALREADY_EXISTS: "El usuario ya existe",
	EMAIL_CAN_NOT_BE_UPDATED: "El correo electrónico no puede ser actualizado",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Cuenta de credenciales no encontrada",
	SESSION_EXPIRED: "Sesión expirada",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Error al desvincular la última cuenta",
	ACCOUNT_NOT_FOUND: "Cuenta no encontrada",
} satisfies ErrorTypes;

export const getErrorMessage = (code: string) => {
	if (code in errorCodes) {
		return errorCodes[code as keyof typeof errorCodes];
	}
	return "";
};

export const { signIn, signUp, useSession } = createAuthClient();
