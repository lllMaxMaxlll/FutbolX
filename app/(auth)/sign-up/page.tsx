import RegisterForm from "@/app/(auth)/(components)/sign-up-form";

export default function SignUpPage() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-[url('https://wfriamwjdtxslgskjtsw.supabase.co/storage/v1/object/public/images//soccer-sport-environment-filed.jpg')] bg-cover bg-center bg-no-repeat ">
			<div className="w-full max-w-2xl md:max-w-3xl">
				<RegisterForm />
			</div>
		</div>
	);
}
