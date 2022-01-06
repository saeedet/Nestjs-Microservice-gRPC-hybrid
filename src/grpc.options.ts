import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['movie'],
    protoPath: [join(__dirname, './movie/movie.proto')],
    url: process.env.GRPC_URL,
  },
};
