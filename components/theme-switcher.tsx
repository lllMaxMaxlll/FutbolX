"use client";

import { useTheme } from "next-themes";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Select value={theme} onValueChange={setTheme}>
			<SelectTrigger>
				<SelectValue placeholder="Selecciona la apariencia" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="light">Claro</SelectItem>
				<SelectItem value="dark">Oscuro</SelectItem>
				<SelectItem value="system">Sistema</SelectItem>
			</SelectContent>
		</Select>
	);
};

export default ThemeSwitcher;
