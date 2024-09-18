import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { access } from "fs";
import { UserService } from "../users/user.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) {}
    async signIn(username: string, password: string) {
        const user = await this.userService.findUserByUsername(username);
        if (!user) {
            throw new Error('User not found')
        }
        if (password === user.password) {
            const accessToken = this.jwtService.signAsync({
                sub: user.id,
                username: user.username,
            },
            {
                secret: this.configService.get<string>('JWT_SECRET_KEY'),
                expiresIn: '15m',
            },
            );
            return accessToken
        } else {
            throw new Error('error password');
        }
    }
}