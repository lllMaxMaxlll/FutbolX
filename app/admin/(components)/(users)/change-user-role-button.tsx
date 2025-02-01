"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useUsers } from "@/context/ListUsersContext";
import { getErrorMessage } from "@/lib/auth-client";

interface SetUserRoleButtonProps {
	userId: string;
	currentRole: "admin" | "user";
}

export default function SetUserRoleButton({ userId, currentRole }: SetUserRoleButtonProps) {
	const [isLoading, setIsLoading] = useState(false);
	const [selectedRole, setSelectedRole] = useState<"admin" | "user">(currentRole);
	const { refreshUsers } = useUsers();

	const handleRoleChange = async () => {
		if (selectedRole === currentRole) return;

		setIsLoading(true);
		toast("Cambiando rol...");

		try {
			await authClient.admin.setRole(
				{ userId, role: selectedRole },
				{
					onSuccess: () => {
						toast.success("Rol cambiado correctamente.");
						refreshUsers();
					},
					onError: (ctx) => {
						console.log(ctx.error);
						toast.error(getErrorMessage(ctx.error.code ?? "Algo salió mal"));
					},
				}
			);
		} catch (err) {
			console.error(err);
			toast.error("Error al cambiar el rol");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" size="sm">
					Cambiar rol
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Cambiar rol de usuario</DialogTitle>
				</DialogHeader>
				<div className="space-y-4">
					<Select value={selectedRole} onValueChange={(value: "admin" | "user") => setSelectedRole(value)}>
						<SelectTrigger>
							<SelectValue placeholder="Selecciona un rol" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="admin">Admin</SelectItem>
							<SelectItem value="user">Usuario</SelectItem>
						</SelectContent>
					</Select>
					<Button onClick={handleRoleChange} disabled={isLoading || selectedRole === currentRole}>
						{isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : "Cambiar rol"}
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
