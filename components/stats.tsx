import { Card, CardContent } from "@/components/ui/card";
const Stats = () => {
	const stats = [
		{ number: "1,000+", label: "Torneos Activos" },
		{ number: "50,000+", label: "Jugadores" },
		{ number: "5,000+", label: "Equipos" },
		{ number: "98%", label: "Satisfacción" },
	];
	return (
		<section id="estadisticas" className="py-16 bg-green-700">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FutbolX en números</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{stats.map((stat, index) => (
						<Card key={index} className="bg-white/10 border-none">
							<CardContent className="p-6 text-center">
								<div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
								<div className="text-sm md:text-base ">{stat.label}</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
export default Stats;
