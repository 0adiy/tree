import { Injectable } from '@nestjs/common';
import { clerkClient } from '@clerk/clerk-sdk-node';

@Injectable()
export class AppService {
	async getTrees(userId: string): Promise<any> {
		const user = await clerkClient.users.getUser(userId);

		// search in db

		// get the trees for this user

		// return the trees
		return { message: user?.emailAddresses[0].emailAddress };
	}
}
