import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen();
  logger.log('Microservice is listening...');
  // app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);

  // await app.startAllMicroservices();
  // await app.listen(process.env.APPLICATION_PORT);

  // console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
