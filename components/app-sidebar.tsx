"use client";

import * as React from "react";
import { Calendar, LifeBuoy, Send, Trophy, Users } from "lucide-react";
import { PiSoccerBallFill } from "react-icons/pi";

import NavMain from "@/components/nav-main";
import NavSecondary from "@/components/nav-secondary";
import NavUser from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
	navMain: [
		{
			title: "Torneos",
			url: "#",
			icon: Trophy,
		},
		{
			title: "Partidos",
			url: "#",
			icon: Calendar,
		},
		{
			title: "Equipos",
			url: "#",
			icon: Users,
		},
	],
	navSecondary: [
		{
			title: "Soporte",
			url: "#",
			icon: LifeBuoy,
		},
		{
			title: "Feedback",
			url: "#",
			icon: Send,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<div>
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<PiSoccerBallFill className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">TourneyMate</span>
									<span className="truncate text-xs">Organiza tu torneo</span>
								</div>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
		</Sidebar>
	);
}
