import { Button } from "@/components/ui/button";
const CallToAction = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<div className="rounded-2xl p-8 md:p-12">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para revolucionar tu torneo de fútbol?</h2>
						<p className="text-lg md:text-xl mb-8 opacity-90">
							Únete a miles de organizadores que ya confían en FutbolX para gestionar sus torneos.
						</p>
						<Button className="text-lg px-8 py-6">Comenzar Gratis</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
export default CallToAction;
