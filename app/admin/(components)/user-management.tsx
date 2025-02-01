import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import CreateUserDialog from "./(users)/create-user";
import ListUserTable from "./(users)/users-list-table";

const UserManagement = () => {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<div>
					<CardTitle>Administrar usuarios</CardTitle>
					<CardDescription>Agregar, editar o eliminar usuarios.</CardDescription>
				</div>
				<CreateUserDialog />
			</CardHeader>

			<CardContent>
				<ListUserTable />
			</CardContent>
		</Card>
	);
};

export default UserManagement;
