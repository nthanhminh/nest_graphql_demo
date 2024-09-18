import { Args, Int, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { CommentService } from "./comment.service";
import { CreateNewCommentDto } from "./dto/createNewComment.dto";
import { UpdateCommentDto } from "./dto/updateComment.dto";
import { Comment } from "../shared/prismagraphql/comment";
import { CommentSubscriptionService } from "./commentSubcription.service";
@Resolver(() => Comment)
export class CommentResolver {
  constructor(
    private readonly commentService: CommentService,
    private readonly commentSubscriptionService: CommentSubscriptionService
  ) {}

  @Mutation(() => Comment)
  async createComment(@Args('createNewComment') createNewComment: CreateNewCommentDto) : Promise<Comment | null> {
    return await this.commentService.createNewComment(createNewComment);
  }

  @Query(() => Comment, { name: 'post' })
  async findCommentById(@Args('id', { type: () => Int }) id: number): Promise<Comment | null> {
    return await this.commentService.findCommentById(id);
  }

  @Query(() => [Comment], { name: 'commentsByUserId' })
  async findCommentsByUserId(@Args('userId', { type: () => Int }) userId: number): Promise<Comment[] | null> {
    return await this.commentService.findCommentsByUserId(userId);
  }

  @Query(() => [Comment], { name: 'commentsByPostId' })
  async findCommentsByPostId(@Args('postId', { type: () => Int }) postId: number): Promise<Comment[] | null> {
    return await this.commentService.findCommentsByPostId(postId);
  }

  @Mutation(() => Comment)
  async updateComment(@Args('updateComment') updateComment: UpdateCommentDto) {
    return await this.commentService.adjustComment(updateComment);
  }

  @Subscription(() => Comment, {
    filter: (payload, variables) => payload.commentAdded.postId === variables.postId,
  })
  commentAdded(@Args('postId') postId: number) {
    return this.commentSubscriptionService.subscribeToComments();
  }
}
