import type { Metadata } from "next";
import SettingsForm from "@/app/dashboard/settings/(components)/settings-form";

export const metadata: Metadata = {
	title: "Configuracion de usuario",
	description: "Administra las opciones del usuario.",
};

export default async function SettingsPage() {
	return (
		<div className="container max-w-3xl mx-auto py-10 px-4">
			<h1 className="text-2xl font-bold mb-5">Configuracion de usuario</h1>
			<SettingsForm />
		</div>
	);
}
