import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
	constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }

	async findAll(): Promise<User[]> {
		return this.userModel.find().exec();
	}

	async findById(id: string): Promise<User> {
		let user = await this.userModel.findOne({ userId: id }).exec();
		if (!user) {
			await this.userModel.create({ userId: id });
			user = await this.userModel.findOne({ userId: id }).exec();
		}
		return user;
	}

	async create(createUserDto: User): Promise<User> {
		const createdUser = new this.userModel(createUserDto);
		return createdUser.save();
	}

	async update(id: string, updateUserDto: User): Promise<User> {
		return this.userModel.findOneAndUpdate({ userId: id }, updateUserDto, { new: true }).exec();
	}

	async delete(id: string): Promise<User> {
		return this.userModel.findOneAndDelete({ userId: id }).exec();
	}
}
