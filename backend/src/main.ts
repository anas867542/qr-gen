import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const port = config.get<number>('PORT', 3000);

  // Global validation – DTOs with class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // CORS – allow frontend dev servers
  const origins = config.get<string>('CORS_ORIGINS');
  app.enableCors({
    origin: origins
      ? origins.split(',').map((o) => o.trim())
      : true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept'],
  });

  await app.listen(port);
  console.log(`Application running on http://localhost:${port}`);
}

bootstrap();
