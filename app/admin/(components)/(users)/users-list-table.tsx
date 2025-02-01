"use client";

import { useUsers } from "@/context/ListUsersContext";
import { DataTable } from "./users-data-table";
import { getColumns } from "./users-columns";
import DataTableSkeleton from "./users-data-table-skeleton";
import { useSession } from "@/lib/auth-client";
import { UserWithRole } from "better-auth/plugins";

export default function ListUserTable() {
	const { users, isLoading, error } = useUsers();
	const { data } = useSession();
	const loggedInUserId = data?.user.id || null;

	if (isLoading) {
		return <DataTableSkeleton />;
	}

	if (error) {
		return <div className="text-center text-red-500">Error: {error}</div>;
	}

	return <DataTable columns={getColumns(loggedInUserId)} data={users as UserWithRole[]} />;
}
