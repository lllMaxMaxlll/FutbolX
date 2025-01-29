import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TournamentManagement = () => {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<div>
					<CardTitle>Tournaments Management</CardTitle>
					<CardDescription>Manage your tournaments here.</CardDescription>
				</div>
				<Dialog>
					<DialogTrigger asChild>
						<Button>Add Tournament</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Add New Tournament</DialogTitle>
						</DialogHeader>
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="tournament-name">Tournament Name</Label>
								<Input id="tournament-name" placeholder="Enter tournament name" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="tournament-date">Date</Label>
								<Input id="tournament-date" type="date" />
							</div>
						</div>
						<DialogFooter>
							<Button type="submit">Create Tournament</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Date</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>Summer Championship</TableCell>
							<TableCell>2024-06-01</TableCell>
							<TableCell>Upcoming</TableCell>
							<TableCell>
								<Dialog>
									<DialogTrigger asChild>
										<Button variant="outline" size="sm">
											Edit
										</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Edit Tournament</DialogTitle>
										</DialogHeader>
										<div className="space-y-4">
											<div className="space-y-2">
												<Label htmlFor="edit-tournament">Name</Label>
												<Input id="edit-tournament" defaultValue="Summer Championship" />
											</div>
											<div className="space-y-2">
												<Label htmlFor="edit-date">Date</Label>
												<Input id="edit-date" type="date" defaultValue="2024-06-01" />
											</div>
										</div>
										<DialogFooter>
											<Button type="submit">Save Changes</Button>
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
export default TournamentManagement;
