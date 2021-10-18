import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  Logger.log("NODE ENV : "+process.env.NODE_ENV);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     transform: true,
  //     transformOptions: {
  //       enableImplicitConversion: true,
  //     },
  //     validationError: { target: false, value: false },
  //   })
  // );
}
bootstrap();
