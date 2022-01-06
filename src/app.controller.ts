import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { MovieName } from './movie/interfaces/grpc.interface';
import { Metadata } from '@grpc/grpc-js';
import { Movie } from './movie/entities/movie.entity';
import { MovieService } from './movie/movie.service';

@Controller()
export class AppController {
  constructor(private readonly movieService: MovieService) {}

  @GrpcMethod('MovieService', 'FindOne')
  findOne({ name }: MovieName, metadata: Metadata): Promise<Movie> {
    return this.movieService.findOne(name);
  }
}
