import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { UserService } from "./user.service";
import { UserResolver } from "./user.resolver";

@Module({
    imports: [PrismaModule],
    exports: [UserService],
    providers: [UserService, UserResolver],
})
export class UserModule {}