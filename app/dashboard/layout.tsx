import { AppSidebar } from "@/app/dashboard/(components)/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import type { Session, User } from "better-auth";
import { headers } from "next/headers";
import React from "react";
import { UserProvider } from "@/context/UserContext";

interface LayoutProps {
	children: React.ReactNode;
}

interface SessionInterface {
	session: Session;
	user: User;
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
	const session: SessionInterface | null = await auth.api.getSession({
		headers: await headers(),
	});

	// Ensure the user is either User or null
	const user: User | null = session?.user ?? null;

	return (
		<UserProvider>
			<SidebarProvider>
				<AppSidebar user={user} />
				<SidebarInset>{children}</SidebarInset>
			</SidebarProvider>
		</UserProvider>
	);
};
export default Layout;
