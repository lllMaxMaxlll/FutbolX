"use client";

import * as React from "react";
import { Calendar, LifeBuoy, Send, Trophy, Users } from "lucide-react";

import NavMain from "./nav-main";
import NavSecondary from "./nav-secondary";
import NavUser from "./nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { User } from "@/types";
import { useUser } from "@/context/UserContext";
import { useEffect } from "react";
import Logo from "@/public/logo";

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

export function AppSidebar({ user }: { user: User }) {
	const { setUser } = useUser();

	useEffect(() => {
		setUser(user);
	}, [user, setUser]);

	return (
		<Sidebar collapsible="icon" variant="floating">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link href="/dashboard">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-primary-foreground">
									<Logo />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">Futbol X</span>
									<span className="truncate text-xs">Organiza tu torneo</span>
								</div>
							</Link>
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
