import { Module } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CommentResolver } from "./comment.resolver";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    exports: [],
    providers: [CommentService, CommentResolver],
})
export class CommentModule{}