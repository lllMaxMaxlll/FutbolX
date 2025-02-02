import SignInForm from "@/app/(auth)/(components)/sign-in-form";

export default function SignInPage() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-[url('https://wfriamwjdtxslgskjtsw.supabase.co/storage/v1/object/public/images//soccer-sport-environment-filed.jpg')] bg-cover bg-center bg-no-repeat ">
			<SignInForm />
		</div>
	);
}
