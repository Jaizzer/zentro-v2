import { PrismaClient, User } from '../generated/prisma';

const prisma: PrismaClient = new PrismaClient();

export async function create(data: { username: string }): Promise<null | User> {
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

export async function deleteById(id: string): Promise<null | User> {
	try {
		const deletedUser: User = await prisma.user.delete({
			where: {
				id,
			},
		});
		return deletedUser;
	} catch (error) {
		console.error('Failed to delete the user. ', error);
		throw error;
	}
}

export async function findById(id: string): Promise<null | User> {
	try {
		const user: null | User = await prisma.user.findUnique({
			where: {
				id: id,
			},
		});
		return user;
	} catch (error) {
		console.error('Failed to retrieve the user. ', error);
		throw error;
	}
}
