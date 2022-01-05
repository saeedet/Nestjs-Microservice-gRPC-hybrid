import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { Movie } from './entities/movie.entity';
import { grpcClientOptions } from './grpcClient/grpcClient.options';
import {
  GrpcLikesService,
  GrpcRatingService,
} from './interfaces/grpc.interface';

@Injectable()
export class MovieService implements OnModuleInit {
  private logger = new Logger('MovieService');
  private movies = [
    {
      id: 1,
      name: 'Matrix',
    },
    {
      id: 2,
      name: 'Shining',
    },
    {
      id: 3,
      name: 'No Country for Old Men',
    },
    {
      id: 4,
      name: 'SpiderMan',
    },
  ];
  @Client(grpcClientOptions)
  private client: ClientGrpc;

  private grpcLikesService: GrpcLikesService;
  private grpcRatingService: GrpcRatingService;

  onModuleInit() {
    this.grpcLikesService =
      this.client.getService<GrpcLikesService>('LikesService');
    this.grpcRatingService =
      this.client.getService<GrpcRatingService>('RatingService');
  }

  async findOne(movieName: string): Promise<Movie> {
    const { id, name } = this.movies.find(({ name }) => name === movieName);
    const { likes } = await firstValueFrom(
      this.grpcLikesService.findOne({ id: id }),
    );
    const { rating } = await firstValueFrom(
      this.grpcRatingService.findOne({ id: id }),
    );
    return {
      id,
      name,
      rating,
      likes,
    };
  }

  async findOneById(movieId: number): Promise<Movie> {
    const { id, name } = this.movies.find(({ id }) => id === movieId);
    const { likes } = await firstValueFrom(
      this.grpcLikesService.findOne({ id: id }),
    );
    const { rating } = await firstValueFrom(
      this.grpcRatingService.findOne({ id: id }),
    );
    return {
      id,
      name,
      rating,
      likes,
    };
  }
}
