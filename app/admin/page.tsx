import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserManagement from "./(components)/user-management";
import TournamentManagement from "./(components)/tournaments-management";
import TeamsManagement from "./(components)/teams-management";
import PlayersManagement from "./(components)/players-management";

export default function AdminPage() {
	return (
		<div className="flex-1 space-y-4 p-8 pt-6">
			<div className="flex items-center justify-between space-y-2">
				<h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
				<div className="ml-auto flex items-center space-x-4">
					<Button>Dashboard</Button>
					<Button>Logout</Button>
				</div>
			</div>

			<Tabs defaultValue="users" className="space-y-4">
				<TabsList>
					<TabsTrigger value="users">Users</TabsTrigger>
					<TabsTrigger value="tournaments">Tournaments</TabsTrigger>
					<TabsTrigger value="teams">Teams</TabsTrigger>
					<TabsTrigger value="players">Players</TabsTrigger>
				</TabsList>

				<TabsContent value="users">
					<UserManagement />
				</TabsContent>

				<TabsContent value="tournaments">
					<TournamentManagement />
				</TabsContent>

				<TabsContent value="teams">
					<TeamsManagement />
				</TabsContent>

				<TabsContent value="players">
					<PlayersManagement />
				</TabsContent>
			</Tabs>
		</div>
	);
}
