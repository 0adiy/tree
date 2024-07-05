import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { User } from './user.schema';
import { ClerkAuthGuard } from 'src/clerk-auth.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) { }

	@Get()
	@UseGuards(ClerkAuthGuard)
	async findAll(): Promise<User[]> {
		return this.usersService.findAll();
	}

	@Get(':id')
	@UseGuards(ClerkAuthGuard)
	async findById(@Param('id') id: string): Promise<User> {
		return this.usersService.findById(id);
	}

	@Post()
	@UseGuards(ClerkAuthGuard)
	async create(@Body() createUserDto: User): Promise<User> {
		return this.usersService.create(createUserDto);
	}

	@Put(':id')
	@UseGuards(ClerkAuthGuard)
	async update(@Param('id') id: string, @Body() updateUserDto: User): Promise<User> {
		return this.usersService.update(id, updateUserDto);
	}

	@Delete(':id')
	@UseGuards(ClerkAuthGuard)
	async delete(@Param('id') id: string): Promise<User> {
		return this.usersService.delete(id);
	}
}
