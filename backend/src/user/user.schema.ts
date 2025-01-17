import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User {
	@Prop({ required: true })
	userId: string;

	@Prop()
	trees: [number];
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
