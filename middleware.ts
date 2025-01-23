import { betterFetch } from "@better-fetch/fetch";
import type { auth } from "@/lib/auth";
import { NextResponse, type NextRequest } from "next/server";

type Session = typeof auth.$Infer.Session;

export default async function authMiddleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const inSignPage = pathname.startsWith("/sign-");

	// Skip middleware for sign-in and sign-up pages
	if (inSignPage) {
		return NextResponse.next();
	}

	// Fetch the session
	const { data: session } = await betterFetch<Session>("/api/auth/get-session", {
		baseURL: request.nextUrl.origin,
		headers: {
			cookie: request.headers.get("cookie") || "",
		},
	});

	// If no session and trying to access a protected route, redirect to sign-in
	if (!session && !inSignPage) {
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}

	// If session exists and trying to access sign-in or sign-up, redirect to dashboard
	if (session && inSignPage) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/sign-in", "/sign-up"],
};
