import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { PostService } from "./post.service";
import { PostResolver } from "./post.resolver";

@Module({
    imports: [PrismaModule],
    exports: [],
    providers: [PostService, PostResolver]
})

export class PostModule {}