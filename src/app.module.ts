import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { MovieModule } from './movie/movie.module';
import { MovieService } from './movie/movie.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    GraphQLModule.forRoot({
      //-- off in production
      debug: true,
      playground: true,
      //---
      autoSchemaFile: true,
      cors: false,
    }),
    MovieModule,
  ],
  controllers: [AppController],
  providers: [MovieService],
})
export class AppModule {}
