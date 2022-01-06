import { Observable } from 'rxjs';

export interface MovieId {
  id: number;
}

export interface MovieName {
  name: string;
}

export interface MovieLikes {
  likes: number;
}

export interface MovieRating {
  rating: number;
}

export interface GrpcLikesService {
  findOne(data: MovieId): Observable<MovieLikes>;
}

export interface GrpcRatingService {
  findOne(data: MovieId): Observable<MovieRating>;
}
