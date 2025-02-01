"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { getErrorMessage } from "@/lib/auth-client";
import { ApiError } from "@/types";
import { UserWithRole } from "better-auth/plugins";

interface UsersContextType {
	users: UserWithRole[];
	isLoading: boolean;
	error: string | null;
	refreshUsers: () => Promise<void>;
	deleteUser: (userId: string) => Promise<void>;
}

// Create Context
const UsersContext = createContext<UsersContextType | undefined>(undefined);

// Context Provider
export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
	const [users, setUsers] = useState<UserWithRole[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	// Fetch users
	const refreshUsers = async () => {
		try {
			setIsLoading(true);
			const { data, error } = await authClient.admin.listUsers({
				query: {
					limit: 10,
				},
			});

			if (error) {
				throw new Error(error.message);
			}

			setUsers(data.users);
		} catch (err) {
			const apiError = err as ApiError;
			setError(getErrorMessage(apiError?.code ?? "Algo salió mal"));
		} finally {
			setIsLoading(false);
		}
	};

	// Delete user and update state globally
	const deleteUser = async (userId: string) => {
		await authClient.admin
			.removeUser(
				{ userId },
				{
					onRequest: () => {
						setIsLoading(true);
					},
					onSuccess: () => {
						toast.success("Usuario eliminado correctamente");
					},
					onError: (ctx) => {
						setIsLoading(false);
						toast.error(getErrorMessage(ctx.error.code) ?? "Algo salió mal");
					},
				}
			)
			.finally(() => {
				refreshUsers();
			});
	};

	useEffect(() => {
		refreshUsers();
	}, []);

	return <UsersContext.Provider value={{ users, isLoading, error, refreshUsers, deleteUser }}>{children}</UsersContext.Provider>;
};

// Hook to use UsersContext
export const useUsers = () => {
	const context = useContext(UsersContext);
	if (!context) {
		throw new Error("useUsers must be used within a UsersProvider");
	}
	return context;
};
