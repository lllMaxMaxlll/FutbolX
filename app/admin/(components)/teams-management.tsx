import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TeamsManagement = () => {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<div>
					<CardTitle>Teams Management</CardTitle>
					<CardDescription>Manage your teams here.</CardDescription>
				</div>
				<Dialog>
					<DialogTrigger asChild>
						<Button>Add Team</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Add New Team</DialogTitle>
						</DialogHeader>
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="team-name">Team Name</Label>
								<Input id="team-name" placeholder="Enter team name" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="team-coach">Coach</Label>
								<Input id="team-coach" placeholder="Enter coach name" />
							</div>
						</div>
						<DialogFooter>
							<Button type="submit">Create Team</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Coach</TableHead>
							<TableHead>Players Count</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>Red Dragons</TableCell>
							<TableCell>Mike Johnson</TableCell>
							<TableCell>15</TableCell>
							<TableCell>
								<Dialog>
									<DialogTrigger asChild>
										<Button variant="outline" size="sm">
											Edit
										</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Edit Team</DialogTitle>
										</DialogHeader>
										<div className="space-y-4">
											<div className="space-y-2">
												<Label htmlFor="edit-team">Name</Label>
												<Input id="edit-team" defaultValue="Red Dragons" />
											</div>
											<div className="space-y-2">
												<Label htmlFor="edit-coach">Coach</Label>
												<Input id="edit-coach" defaultValue="Mike Johnson" />
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
export default TeamsManagement;
