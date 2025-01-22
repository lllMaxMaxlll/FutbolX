import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";
import { LogOut } from "lucide-react";

const SignOutButton = () => {
	const handleSignOut = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					redirect("/sign-in");
				},
			},
		});
	};

	return (
		<div className="inline-flex gap-2" onClick={handleSignOut}>
			<LogOut />
			Cerrar sesion
		</div>
	);
};

export default SignOutButton;
