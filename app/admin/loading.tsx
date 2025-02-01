import { Skeleton } from "@/components/ui/skeleton";

export default function AdminDashboardSkeleton() {
	return (
		<div className="flex-1 space-y-4 p-8 pt-6">
			{/* Header Skeleton */}
			<div className="flex items-center justify-between space-y-2">
				<Skeleton className="h-8 w-1/3" />
				<div className="ml-auto flex items-center space-x-4">
					<Skeleton className="h-10 w-24" />
					<Skeleton className="h-10 w-32" />
				</div>
			</div>

			{/* Tabs Skeleton */}
			<div className="flex space-x-4">
				<Skeleton className="h-10 w-20" />
				<Skeleton className="h-10 w-24" />
				<Skeleton className="h-10 w-20" />
				<Skeleton className="h-10 w-24" />
			</div>

			{/* Content Skeleton */}
			<div className="space-y-4">
				<Skeleton className="h-6 w-1/4" />
				<Skeleton className="h-96 w-full" />
			</div>
		</div>
	);
}
