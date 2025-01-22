import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (session) {
		return redirect("/dashboard");
	}

	return <>{children};</>;
};

export default Layout;
