import { Module } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CommentResolver } from "./comment.resolver";

import { CommentSubscriptionService } from "./commentSubcription.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    exports: [],
    providers: [CommentService, CommentResolver, CommentSubscriptionService],
})
export class CommentModule{}