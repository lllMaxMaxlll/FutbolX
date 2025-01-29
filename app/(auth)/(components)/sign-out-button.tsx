"use client";

import { signOut } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { LoaderCircle, LogOut } from "lucide-react";

const SignOutButton = () => {
	const [loading, isLoading] = useState(false);
	const handleSignOut = async () => {
		await signOut({
			fetchOptions: {
				onRequest: () => {
					isLoading(true);
				},
				onSuccess: () => {
					isLoading(false);
					redirect("/sign-in");
				},
			},
		});
	};

	return (
		<div className="inline-flex gap-2 items-center text-center" onClick={handleSignOut}>
			<LogOut />
			{loading ? <LoaderCircle className="animate-spin" /> : <>Cerrar sesion</>}
		</div>
	);
};

export default SignOutButton;
