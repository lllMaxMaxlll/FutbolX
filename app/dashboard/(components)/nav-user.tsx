import { BadgeCheck, Bell, ChevronsUpDown, User2 } from "lucide-react";
import { GrUserAdmin } from "react-icons/gr";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import SignOutButton from "@/app/(auth)/(components)/sign-out-button";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function NavUser() {
	const { isMobile } = useSidebar();
	const { user } = useUser();

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
							<Avatar className="h-8 w-8 rounded-lg">
								{user?.image ? (
									<AvatarImage src={user?.image} alt={"User Name"} />
								) : (
									<AvatarFallback className="rounded-lg">
										<User2 />
									</AvatarFallback>
								)}
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">{user?.name || "Usuario"}</span>
								<span className="truncate text-xs">{user?.email || "Email"}</span>
							</div>
							<ChevronsUpDown className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-8 w-8 rounded-lg">
									{user?.image ? (
										<AvatarImage src={user?.image} alt={"User Name"} />
									) : (
										<AvatarFallback className="rounded-lg">
											<User2 />
										</AvatarFallback>
									)}
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">{user?.name || "Usuario"}</span>
									<span className="truncate text-xs">{user?.email || "Email"}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />

						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							{user?.role === "admin" && (
								<Link href="/admin">
									<DropdownMenuItem>
										<GrUserAdmin />
										Panel Admin
									</DropdownMenuItem>
								</Link>
							)}
							<Link href="/dashboard/settings">
								<DropdownMenuItem>
									<BadgeCheck />
									Cuenta
								</DropdownMenuItem>
							</Link>

							<DropdownMenuItem>
								<Bell />
								Notificaciones
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<SignOutButton />
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
