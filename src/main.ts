import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { grpcOptions } from './grpc.options';

const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  logger.log('Microservice is listening...');
  app.connectMicroservice<MicroserviceOptions>(grpcOptions);

  await app.startAllMicroservices();
  await app.listen(process.env.APPLICATION_PORT);

  logger.log(`Microservice is listening on ${process.env.GRPC_URL}`);
  logger.log(`Application is running on port: ${process.env.APPLICATION_PORT}`);
}
bootstrap();
