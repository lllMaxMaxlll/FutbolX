import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PlayersManagement = () => {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<div>
					<CardTitle>Players Management</CardTitle>
					<CardDescription>Manage your players here.</CardDescription>
				</div>
				<Dialog>
					<DialogTrigger asChild>
						<Button>Add Player</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Add New Player</DialogTitle>
						</DialogHeader>
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="player-name">Name</Label>
								<Input id="player-name" placeholder="Enter player name" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="player-team">Team</Label>
								<Input id="player-team" placeholder="Select team" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="player-position">Position</Label>
								<Input id="player-position" placeholder="Enter position" />
							</div>
						</div>
						<DialogFooter>
							<Button type="submit">Create Player</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Team</TableHead>
							<TableHead>Position</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>Alex Smith</TableCell>
							<TableCell>Red Dragons</TableCell>
							<TableCell>Forward</TableCell>
							<TableCell>
								<Dialog>
									<DialogTrigger asChild>
										<Button variant="outline" size="sm">
											Edit
										</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Edit Player</DialogTitle>
										</DialogHeader>
										<div className="space-y-4">
											<div className="space-y-2">
												<Label htmlFor="edit-player">Name</Label>
												<Input id="edit-player" defaultValue="Alex Smith" />
											</div>
											<div className="space-y-2">
												<Label htmlFor="edit-player-team">Team</Label>
												<Input id="edit-player-team" defaultValue="Red Dragons" />
											</div>
											<div className="space-y-2">
												<Label htmlFor="edit-position">Position</Label>
												<Input id="edit-position" defaultValue="Forward" />
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
export default PlayersManagement;
