import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export default function DataTableSkeleton() {
	return (
		<div>
			{/* Search Bar Skeleton */}
			<div className="flex items-center justify-between py-4">
				<Skeleton className="h-10 w-1/3" />
			</div>

			{/* Table Skeleton */}
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>
								<Skeleton className="h-4 w-24" />
							</TableHead>
							<TableHead>
								<Skeleton className="h-4 w-32" />
							</TableHead>
							<TableHead>
								<Skeleton className="h-4 w-20" />
							</TableHead>
							<TableHead>
								<Skeleton className="h-4 w-24" />
							</TableHead>
							<TableHead>
								<Skeleton className="h-4 w-16" />
							</TableHead>
							<TableHead>
								<Skeleton className="h-4 w-32" />
							</TableHead>
							<TableHead>
								<Skeleton className="h-4 w-16" />
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{Array(5)
							.fill(null)
							.map((_, i) => (
								<TableRow key={i}>
									<TableCell>
										<Skeleton className="h-6 w-full" />
									</TableCell>
									<TableCell>
										<Skeleton className="h-6 w-full" />
									</TableCell>
									<TableCell>
										<Skeleton className="h-6 w-full" />
									</TableCell>
									<TableCell>
										<Skeleton className="h-6 w-full" />
									</TableCell>
									<TableCell>
										<Skeleton className="h-6 w-full" />
									</TableCell>
									<TableCell>
										<Skeleton className="h-6 w-full" />
									</TableCell>
									<TableCell>
										<Skeleton className="h-6 w-10" />
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
