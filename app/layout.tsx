import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "FutbolX - Organiza tus torneos de fútbol",
	description:
		"FutbolX es la plataforma definitiva para crear y gestionar torneos de fútbol. Organiza equipos, jugadores y partidos de manera fácil y rápida. Lleva la pasión del fútbol al siguiente nivel con FutbolX",
	keywords: "fútbol, torneos, gestión de torneos, equipos, jugadores, ligas, organización de partidos, app de fútbol, FutbolX",
	openGraph: {
		title: "FutbolX - Organiza tus torneos de fútbol",
		description:
			"FutbolX es la plataforma definitiva para crear y gestionar torneos de fútbol. Organiza equipos, jugadores y partidos de manera fácil y rápida. Lleva la pasión del fútbol al siguiente nivel con FutbolX",
		url: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
		siteName: "FutbolX",
		images: [
			{
				url: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
				width: 1200,
				height: 630,
			},
		],
		locale: "es_ES",
		type: "website",
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					{children}
					<Toaster />
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}
