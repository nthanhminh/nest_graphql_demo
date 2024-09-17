import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Post } from "src/shared/prismagraphql/post";
import { PostService } from "./post.service";
import { CreateNewPostDto } from "./dto/createNewPost.dto";
import { UpdatePostDto } from "./dto/updateNewPost.dto";


@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  async createPost(@Args('createNewPost') createNewPost: CreateNewPostDto): Promise<Post> {
    return await this.postService.createNewPost(createNewPost);
  }

  @Query(() => Post, { name: 'post' })
  async findPostById(@Args('id', { type: () => Int }) id: number): Promise<Post | null> {
    return await this.postService.findPostById(id);
  }

  @Query(() => [Post], { name: 'posts' })
  async findPostsByUserId(@Args('userId', { type: () => Int }) userId: number): Promise<Post[] | null> {
    return await this.postService.findPostByUserId(userId);
  }

  @Mutation(() => Post)
  async updatePost(@Args('updatePost') updatePost: UpdatePostDto) {
    return await this.postService.updatePost(updatePost);
  }
}
