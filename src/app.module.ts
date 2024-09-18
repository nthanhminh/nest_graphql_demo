import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { CommentModule } from './modules/comment/comment.module';
import { PostModule } from './modules/post/post.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AppResolver } from './modules/resolvers/app.resolver';
import { UserModule } from './modules/users/user.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      playground: process.env.ENV!=='production',
      context: ({ req }) => ({ request: req }),
      subscriptions: {
        'graphql-ws': true,  // Sử dụng giao thức WebSocket cho Subscriptions
      },
      installSubscriptionHandlers: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UserModule,
    PostModule,
    CommentModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
