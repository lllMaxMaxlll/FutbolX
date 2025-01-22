"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Ensure the component is mounted before rendering
	useEffect(() => {
		setMounted(true);
	}, []);

	// Don't render anything until the component is mounted
	if (!mounted) {
		return null;
	}

	return (
		<Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
			{theme === "dark" ? <Sun /> : <Moon />}
		</Button>
	);
};

export default ThemeSwitcher;
