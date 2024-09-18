import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApolloServer } from '@apollo/server';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://studio.apollographql.com', // or '*' for all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // if you are using cookies or authentication headers
  });
  await app.listen(3000);
}
bootstrap();
