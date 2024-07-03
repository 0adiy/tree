import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.use(
		session({
			secret: process.env.SESSION_SECRET,
			resave: false,
			saveUninitialized: false,
			cookie: { secure: false }, // TODO - Set secure: true in production with HTTPS
		}),
	);

	await app.listen(3000);
}
bootstrap();
