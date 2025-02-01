"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { getErrorMessage } from "@/lib/auth-client";
import { useUsers } from "@/context/ListUsersContext";
import { Button } from "@/components/ui/button";

interface BanUserButtonProps {
	userId: string;
	isBanned: boolean;
}

export default function BanUserButton({ userId, isBanned }: BanUserButtonProps) {
	const [isLoading, setIsLoading] = useState(false);
	const { refreshUsers } = useUsers();

	const handleBan = async () => {
		setIsLoading(true);
		toast(isBanned ? "Desbaneando usuario..." : "Baneando usuario...");

		try {
			if (isBanned) {
				// Unban the user
				await authClient.admin.unbanUser(
					{ userId },
					{
						onSuccess: () => {
							toast.success("Usuario desbaneado exitosamente");
						},
						onError: (ctx) => {
							toast.error(getErrorMessage(ctx.error.code) ?? "Algo salió mal");
						},
					}
				);
			} else {
				// Ban the user
				await authClient.admin.banUser(
					{
						userId,
					},
					{
						onSuccess: () => {
							toast.success("Usuario baneado exitosamente");
							refreshUsers();
						},
						onError: (ctx) => {
							toast.error(getErrorMessage(ctx.error.code) ?? "Algo salió mal");
						},
					}
				);
			}
		} catch (err) {
			console.error(err);
			toast.error(`Error al ${isBanned ? "desbanear" : "banear"} al usuario`);
		} finally {
			refreshUsers();
		}
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="ghost" size="sm">
					{isBanned ? "Desbanear" : "Banear"}
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						{isBanned ? "¿Estás seguro de desbanear a este usuario?" : "¿Estás seguro de banear a este usuario?"}
					</AlertDialogTitle>
					<AlertDialogDescription>
						{isBanned ? "El usuario podrá acceder a la plataforma nuevamente." : "El usuario será baneado permanentemente."}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel disabled={isLoading}>Cancelar</AlertDialogCancel>
					<AlertDialogAction onClick={handleBan} disabled={isLoading}>
						{isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : isBanned ? "Desbanear" : "Banear"}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
