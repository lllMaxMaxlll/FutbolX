import { Trophy, Calendar, Users, BarChart } from "lucide-react";

const caracteristicas = [
	{
		nombre: "Creación de Torneos",
		descripcion: "Configura y personaliza torneos fácilmente con opciones flexibles.",
		icono: Trophy,
	},
	{
		nombre: "Programación",
		descripcion: "Programación automática de partidos que se adapta al formato de tu torneo.",
		icono: Calendar,
	},
	{
		nombre: "Gestión de Equipos",
		descripcion: "Administra sin esfuerzo las inscripciones de equipos y la información de los jugadores.",
		icono: Users,
	},
	{
		nombre: "Estadísticas en Tiempo Real",
		descripcion: "Sigue puntuaciones, clasificaciones y estadísticas de jugadores en tiempo real.",
		icono: BarChart,
	},
];

export default function Features() {
	return (
		<section id="caracteristicas" className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">Potentes Características para Organizadores de Torneos</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{caracteristicas.map((caracteristica) => (
						<div key={caracteristica.nombre} className="flex flex-col items-center text-center">
							<div className="flex items-center justify-center h-16 w-16 rounded-full text-green-600 mb-4">
								<caracteristica.icono className="h-8 w-8" />
							</div>
							<h3 className="text-xl font-semibold mb-2">{caracteristica.nombre}</h3>
							<p className="text-sm">{caracteristica.descripcion}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
