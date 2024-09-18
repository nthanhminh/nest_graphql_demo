import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { UserModule } from "../users/user.module";

@Module({
    imports: [
        JwtModule.register({}),
        UserModule
    ],
    providers: [AuthService, AuthResolver, JwtStrategy]
})
export class AuthModule {}