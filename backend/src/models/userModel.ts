import { PrismaClient, User } from '../generated/prisma';

const prisma: PrismaClient = new PrismaClient();

export async function create(data: { username: string }) {
	try {
		const user: User = await prisma.user.create({
			data,
		});
		return user;
	} catch (error) {
		console.error('Failed to create the user. ', error);
		throw error;
	}
}
