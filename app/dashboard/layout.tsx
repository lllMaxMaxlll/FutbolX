import { getServerSession } from "@/actions/authActions";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SessionProvider } from "@/context/SessionContext";
import React from "react";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
	const session = await getServerSession();

	return (
		<SessionProvider session={session?.session || null} user={session?.user || null}>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>{children}</SidebarInset>
			</SidebarProvider>
		</SessionProvider>
	);
};

export default Layout;
