"use client";

import ThemeSwitcher from "@/components/theme-switcher";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ChangePasswordForm from "./change-password-form";
import ChangeNameForm from "./change-name-form";

export function SettingsForm() {
	return (
		<div className="space-y-6">
			<ChangeNameForm />
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
