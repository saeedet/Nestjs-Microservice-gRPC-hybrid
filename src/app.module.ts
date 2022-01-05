import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MovieModule } from './movie/movie.module';

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
})
export class AppModule {}
