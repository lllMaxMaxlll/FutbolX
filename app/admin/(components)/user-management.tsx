"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import CreateUserDialog from "./create-user";

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

			{/* Create a getUser component with the table */}
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Nombre</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Rol</TableHead>
							<TableHead>Estado</TableHead>
							<TableHead>Acciones</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>John Doe</TableCell>
							<TableCell>john@example.com</TableCell>
							<TableCell>Admin</TableCell>
							<TableCell>Active</TableCell>
							<TableCell>
								{/* Create a edit user dialog */}
								<Dialog>
									<DialogTrigger asChild>
										<Button variant="outline" size="sm">
											Editar
										</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Editar usuario</DialogTitle>
										</DialogHeader>
										<div className="space-y-4">
											<div className="space-y-2">
												<Label htmlFor="edit-name">Nombre</Label>
												<Input id="edit-name" defaultValue="John Doe" />
											</div>
											<div className="space-y-2">
												<Label htmlFor="edit-email">Email</Label>
												<Input id="edit-email" defaultValue="john@example.com" />
											</div>
										</div>
										<DialogFooter>
											<Button type="submit">Guardar cambios</Button>
										</DialogFooter>
									</DialogContent>
								</Dialog>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
};

export default UserManagement;
