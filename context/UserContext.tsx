"use client";

import React, { createContext, useContext, useState } from "react";
import { User } from "@/types";

interface UserContextProps {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>; // Allow functional updates
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};
