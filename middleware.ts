import { NextResponse, type NextRequest } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

const authRoutes = ["/dashboard/:path*", "/sign-in", "/sign-up"];
const passwordRoutes = ["/reset-password", "/forgot-password"];
const adminRoutes = ["/admin"];

export default async function authMiddleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const inAuthRoutes = authRoutes.includes(pathname);
	const inPasswordRoutes = passwordRoutes.includes(pathname);
	const isAdminRoute = adminRoutes.includes(pathname);

	// Fetch the session
	const data = await auth.api.getSession({
		headers: await headers(),
	});

	if (!data?.session) {
		if (inAuthRoutes || inPasswordRoutes) {
			return NextResponse.next();
		}
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}

	if (inAuthRoutes || inPasswordRoutes) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	if (isAdminRoute && data.user.role !== "admin") {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
