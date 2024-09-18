import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service'; // Đảm bảo đường dẫn chính xác
import { User } from '../shared/prismagraphql/user';
import { CreateNewUserGraphDto } from './dto/createNewUserGraph.dto';
import { UserService } from './user.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/auth.guard';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('createNewUser') createNewUser: CreateNewUserGraphDto): Promise<User> {
    return await this.userService.createUser(createNewUser);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { name: 'user' })
  async findUserById(@Args('id', { type: () => Int }) id: number): Promise<User | null> {
    return await this.userService.findUserById(id);
  }
}
