"use client";

import { Session, User } from "@/types";
import { createContext, useContext } from "react";

type SessionContextType = {
	user: User | undefined | null;
	session: Session | undefined | null;
};

const SessionContext = createContext<SessionContextType>({
	user: undefined,
	session: undefined,
});

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ user, session, children }: { user: User | null; session: Session | null; children: React.ReactNode }) => {
	return <SessionContext.Provider value={{ user, session }}>{children}</SessionContext.Provider>;
};
