import { UsersProvider } from "@/context/ListUsersContext";

export default function Providers({ children }: { children: React.ReactNode }) {
	return <UsersProvider>{children}</UsersProvider>;
}
