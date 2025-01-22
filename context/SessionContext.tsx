"use client";

import { Session, User } from "@/types";
import { createContext, useContext } from "react";

type SessionContextType = {
	user: User | null;
	session: Session | null;
};

const SessionContext = createContext<SessionContextType>({
	user: null,
	session: null,
});

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ user, session, children }: { user: User | null; session: Session | null; children: React.ReactNode }) => {
	return <SessionContext.Provider value={{ user, session }}>{children}</SessionContext.Provider>;
};
