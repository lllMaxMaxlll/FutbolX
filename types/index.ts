export type User = {
	id: string;
	name: string;
	email: string;
	emailVerified: boolean;
	image?: string | null | undefined;
	createdAt: Date;
	updatedAt: Date;
};

export type Session = {
	id: string;
	expiresAt: Date;
	token: string;
	createdAt: Date;
	updatedAt: Date;
	ipAddress?: string | null | undefined;
	userAgent?: string | null | undefined;
	userId: string;
};
