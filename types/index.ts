import { auth } from "@/lib/auth";

export type Session = typeof auth.$Infer.Session | null;
export type User = typeof auth.$Infer.Session.user | null;
