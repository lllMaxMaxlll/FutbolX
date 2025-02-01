import { auth } from "@/lib/auth";

export type Session = typeof auth.$Infer.Session.session | null;
export type User = typeof auth.$Infer.Session.user | null;

export interface ApiError {
	code?: string;
	message?: string;
	status?: number;
	statusText?: string;
}
