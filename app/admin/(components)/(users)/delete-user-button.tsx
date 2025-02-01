"use client";

import { useUsers } from "@/context/ListUsersContext";
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
import { Button } from "@/components/ui/button";
interface DeleteUserActionProps {
	userId: string;
}

export default function DeleteUserAction({ userId }: DeleteUserActionProps) {
	const { deleteUser, isLoading } = useUsers();

	const handleDelete = async () => {
		await deleteUser(userId);
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="ghost" size="sm" className="text-red-500">
					Eliminar usuario
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Estas seguro que quieres continuar?</AlertDialogTitle>
					<AlertDialogDescription>
						Esta accion no se puede deshacer. El usuario será eliminado permanentemente de la base de datos.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<AlertDialogAction onClick={handleDelete} disabled={isLoading}>
						Eliminar
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
