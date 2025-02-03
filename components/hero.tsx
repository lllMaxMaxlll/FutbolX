import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="pt-24 pb-8 md:pt-32 md:pb-16">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Gestiona tus torneos de fútbol como un <span className="text-green-600">profesional</span>
						</h1>
						<p className="text-xl text-gray-500 mb-8">
							Organiza torneos, administra equipos y jugadores en una sola plataforma. Simple, rápido y eficiente.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button variant="outline" className="text-lg px-8 py-6">
								Comenzar Ahora
							</Button>
						</div>
					</div>
					<div className="md:w-1/2 md:pl-12">
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-neutral-900/20 rounded-lg transform rotate-3"></div>
							<Image
								src="https://images.pexels.com/photos/29388610/pexels-photo-29388610/free-photo-of-dynamic-soccer-match-on-sunlit-field.jpeg"
								alt="FutbolX Dashboard"
								className="relative rounded-lg shadow-xl"
								width="800"
								height="800"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;
