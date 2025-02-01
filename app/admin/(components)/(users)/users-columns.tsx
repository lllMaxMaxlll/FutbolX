"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import DeleteUserAction from "./delete-user-button";
import { UserWithRole } from "better-auth/plugins";
import SetUserRoleButton from "./change-user-role-button";
import BanUserButton from "./ban-user-button";

export const getColumns = (loggedInUserId: string | null): ColumnDef<UserWithRole>[] => [
	{
		accessorKey: "name",
		header: "Nombre",
	},
	{
		accessorKey: "email",
		header: ({ column }) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Email
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "role",
		header: "Rol",
		cell: ({ row }) => (row.original.role === "admin" ? "Admin" : "Usuario"),
	},
	{
		accessorKey: "emailVerified",
		header: "Verificación Email",
		cell: ({ row }) => (row.original.emailVerified ? "Verificado" : "No verificado"),
	},
	{
		accessorKey: "banned",
		header: "Baneado",
		cell: ({ row }) => (row.original.banned ? "Sí" : "No"),
	},

	{
		id: "actions",
		cell: ({ row }) => {
			const { id, banned } = row.original;

			// ✅ Hide actions for the logged-in user
			if (id === loggedInUserId) {
				return null;
			}

			return (
				<DropdownMenu modal={false}>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="flex flex-col">
						<DropdownMenuLabel>Acciones</DropdownMenuLabel>
						<DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
							<BanUserButton userId={id} isBanned={banned || false} />
						</DropdownMenuItem>
						<DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
							<SetUserRoleButton userId={row.original.id} currentRole={(row.original.role as "admin" | "user") ?? "user"} />
						</DropdownMenuItem>
						<DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
							<DeleteUserAction userId={id} />
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
