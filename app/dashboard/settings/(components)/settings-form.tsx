"use client";

import ThemeSwitcher from "@/components/theme-switcher";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ChangePasswordForm from "./change-password-form";
import ChangeNameForm from "./change-name-form";
import { useUser } from "@/context/UserContext";

export default function SettingsForm() {
	const { user } = useUser();

	return (
		<div className="space-y-6">
			<ChangeNameForm user={user} />
			<Separator />
			<ChangePasswordForm />
			<Separator />

			<Card className="border-0 ">
				<CardHeader>
					<CardTitle>Apariencia</CardTitle>
					<CardDescription>Cambia la apariencia del sitio.</CardDescription>
				</CardHeader>
				<CardContent>
					<ThemeSwitcher />
				</CardContent>
			</Card>
		</div>
	);
}
