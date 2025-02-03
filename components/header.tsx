import { Button } from "@/components/ui/button";
import Logo from "@/public/logo";
import Link from "next/link";

const Header = () => {
	return (
		<nav className="fixed w-full bg-primary-foreground/80 backdrop-blur-2xl z-50 border-b">
			<div className="container mx-auto px-4 py-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center text-primary-foreground">
						<Logo />
						<span className="ms-2 text-2xl font-bold text-primary">
							Futbol<span className="text-green-500"> X</span>
						</span>
					</div>
					<div className="hidden md:flex items-center space-x-8">
						<Link href="#caracteristicas">Características</Link>
						<Link href="#estadisticas">Estadísticas</Link>
						<Link href="/sign-in">
							<Button>Iniciar Sesión</Button>
						</Link>
						<Link href="/sign-up">
							<Button variant="outline">Registrarse</Button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Header;
