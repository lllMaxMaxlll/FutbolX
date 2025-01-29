import { betterFetch } from "@better-fetch/fetch";
import { NextResponse, type NextRequest } from "next/server";
import { Session } from "./types";

const authRoutes = ["/dashboard/:path*", "/sign-in", "/sign-up"];
const passwordRoutes = ["/reset-password", "/forgot-password"];

export default async function authMiddleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const inAuthRoutes = authRoutes.includes(pathname);
	const inPasswordRoutes = passwordRoutes.includes(pathname);

	// Fetch the session
	const { data: session } = await betterFetch<Session>("/api/auth/get-session", {
		baseURL: request.nextUrl.origin,
		headers: {
			cookie: request.headers.get("cookie") || "",
		},
	});

	if (!session) {
		if (inAuthRoutes || inPasswordRoutes) {
			return NextResponse.next();
		}
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}

	if (inAuthRoutes || inPasswordRoutes) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
