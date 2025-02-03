import { Skeleton } from "@/components/ui/skeleton";

export default function SettingsFormSkeleton() {
	return (
		<div className="container max-w-3xl mx-auto py-10 px-4">
			{/* Profile Image Placeholder */}
			<div className="flex items-center space-x-4">
				<Skeleton className="w-16 h-16 rounded-full" />
				<div className="flex-1 space-y-2">
					<Skeleton className="h-4 w-1/3" />
					<Skeleton className="h-4 w-1/2" />
				</div>
			</div>

			{/* Input Fields */}
			<div className="space-y-4">
				<Skeleton className="h-4 w-1/4" />
				<Skeleton className="h-10 w-full" />
			</div>

			<div className="space-y-4">
				<Skeleton className="h-4 w-1/4" />
				<Skeleton className="h-10 w-full" />
			</div>

			{/* Save Button */}
			<Skeleton className="h-10 w-1/3" />
		</div>
	);
}
