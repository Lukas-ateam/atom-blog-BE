import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  Logger.log("NODE ENV : "+process.env.NODE_ENV);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
