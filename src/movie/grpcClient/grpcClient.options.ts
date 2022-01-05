import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['likes', 'rating'],
    protoPath: [
      join(__dirname, './likes.proto'),
      join(__dirname, './rating.proto'),
    ],
    url: process.env.GRPC_CLIENT_URL,
  },
};
