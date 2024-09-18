import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthResponseDto } from './dto/authResponse.dto';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthResponseDto )
  async signIn(
    @Args('username') username: string,
    @Args('password') password: string
  ): Promise<{ accessToken: string }> {
    const accessToken = await this.authService.signIn(username, password);
    return {
        accessToken: accessToken,
    }
  }
}