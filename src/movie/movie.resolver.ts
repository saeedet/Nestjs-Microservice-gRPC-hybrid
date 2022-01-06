import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { MovieService } from './movie.service';
import { Movie } from './entities/movie.entity';

@Resolver(() => Movie)
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query(() => Movie, { name: 'getMovieById' })
  findOneById(@Args('id', { type: () => Int }) id: number): Promise<Movie> {
    return this.movieService.findOneById(+id);
  }

  @Query(() => Movie, { name: 'getMovieByName' })
  findOne(@Args('name', { type: () => String }) name: string): Promise<Movie> {
    return this.movieService.findOne(name);
  }
}
