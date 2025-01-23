import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Users, Trophy, Calendar, Star } from "lucide-react";

const matches = [
	{ date: "2023-06-15", time: "14:00", team1: "Team A", team2: "Team B" },
	{ date: "2023-06-16", time: "15:30", team1: "Team C", team2: "Team D" },
	{ date: "2023-06-17", time: "16:00", team1: "Team E", team2: "Team F" },
	{ date: "2023-06-18", time: "14:30", team1: "Team G", team2: "Team H" },
];

const standings = [
	{ position: 1, team: "Team A", played: 5, won: 4, drawn: 1, lost: 0, points: 13 },
	{ position: 2, team: "Team B", played: 5, won: 3, drawn: 1, lost: 1, points: 10 },
	{ position: 3, team: "Team C", played: 5, won: 3, drawn: 0, lost: 2, points: 9 },
	{ position: 4, team: "Team D", played: 5, won: 2, drawn: 2, lost: 1, points: 8 },
];

const results = [
	{ date: "2023-06-10", team1: "Team A", score1: 2, team2: "Team B", score2: 1 },
	{ date: "2023-06-09", team1: "Team C", score1: 0, team2: "Team D", score2: 0 },
	{ date: "2023-06-08", team1: "Team E", score1: 3, team2: "Team F", score2: 2 },
	{ date: "2023-06-07", team1: "Team G", score1: 1, team2: "Team H", score2: 4 },
];

const DashboardClient = () => {
	return (
		<>
			<header className="flex h-16 shrink-0 items-center gap-2">
				<div className="flex items-center gap-2 px-4">
					<SidebarTrigger className="-ml-1" />
					<Separator orientation="vertical" className="mr-2 h-4" />
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem className="hidden md:block">
								<BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="hidden md:block" />
							<BreadcrumbItem>
								<BreadcrumbPage>Data Fetching</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</header>
			<div className="flex-1">
				<div className="grid items-start gap-8 p-8">
					{/* Cards info */}
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">Total Teams</CardTitle>
								<Users className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">16</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">Active Tournaments</CardTitle>
								<Trophy className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">2</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">Upcoming Matches</CardTitle>
								<Calendar className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">8</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">Top Scorer</CardTitle>
								<Star className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">John Doe (7)</div>
							</CardContent>
						</Card>
					</div>
					{/* Upcominng matches */}
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
						<div className="col-span-4">
							<Card>
								<CardHeader>
									<CardTitle>Upcoming Matches</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-8">
										{matches.map((match, index) => (
											<div key={index} className="flex items-center">
												<div className="space-y-1">
													<p className="text-sm font-medium leading-none">
														{match.team1} vs {match.team2}
													</p>
													<p className="text-sm text-muted-foreground">
														{match.date} at {match.time}
													</p>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</div>
						<div className="col-span-3">
							<Card>
								<CardHeader>
									<CardTitle>Team Standings</CardTitle>
								</CardHeader>
								<CardContent>
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead className="w-[50px]">Pos</TableHead>
												<TableHead>Team</TableHead>
												<TableHead>P</TableHead>
												<TableHead>W</TableHead>
												<TableHead>D</TableHead>
												<TableHead>L</TableHead>
												<TableHead>Pts</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{standings.map((team) => (
												<TableRow key={team.position}>
													<TableCell>{team.position}</TableCell>
													<TableCell>{team.team}</TableCell>
													<TableCell>{team.played}</TableCell>
													<TableCell>{team.won}</TableCell>
													<TableCell>{team.drawn}</TableCell>
													<TableCell>{team.lost}</TableCell>
													<TableCell>{team.points}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</CardContent>
							</Card>
						</div>
					</div>
					{/* Recent Results */}
					<Card>
						<CardHeader>
							<CardTitle>Recent Results</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-8">
								{results.map((result, index) => (
									<div key={index} className="flex items-center">
										<div className="space-y-1">
											<p className="text-sm font-medium leading-none">
												{result.team1} {result.score1} - {result.score2} {result.team2}
											</p>
											<p className="text-sm text-muted-foreground">{result.date}</p>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
};

export default DashboardClient;
