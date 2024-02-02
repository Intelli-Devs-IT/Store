// src/main.ts
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Store API')
    .setDescription('API for buying and selling goods')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = createDocument(app, options);
  new Set('api');

  await app.listen(3000);
}
bootstrap();
function createDocument(app: INestApplication<any>, options: Omit<import("@nestjs/swagger").OpenAPIObject, "paths">) {
  throw new Error('Function not implemented.');
}

