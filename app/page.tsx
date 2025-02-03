import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import CTA from "@/components/cta";
import Stats from "@/components/stats";

export default function HomePage() {
	return (
		<main className="min-h-screen">
			<Header />
			<Hero />
			<Features />
			<Stats />
			<CTA />

			<footer className="py-6 text-center text-sm text-gray-500">
				© {new Date().getFullYear()} Futbol X. Todos los derechos reservados.
			</footer>
		</main>
	);
}
