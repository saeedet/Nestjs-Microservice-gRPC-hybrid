import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { MovieService } from './movie.service';
import { Movie } from './entities/movie.entity';
import { GrpcMethod } from '@nestjs/microservices';
import { MovieName } from './interfaces/grpc.interface';
import { Metadata } from '@grpc/grpc-js';

@Resolver(() => Movie)
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @GrpcMethod('MovieService', 'FindOne')
  findOne({ name }: MovieName, metadata: Metadata): Promise<Movie> {
    return this.movieService.findOne(name);
  }

  @Query(() => Movie, { name: 'movieById' })
  findOneById(@Args('id', { type: () => Int }) id: number): Promise<Movie> {
    return this.movieService.findOneById(+id);
  }
}
