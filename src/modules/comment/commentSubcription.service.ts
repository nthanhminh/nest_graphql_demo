import { Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { Comment } from '../shared/prismagraphql/comment';

@Injectable()
export class CommentSubscriptionService {
  private pubSub = new PubSub();

  async publishCommentAdded(comment: Comment) {
    if (!comment.id) {
      throw new Error('Comment ID is missing');
    }
  
  
    this.pubSub.publish('commentAdded', { commentAdded: comment });
  }
  

  async subscribeToComments() {
    return this.pubSub.asyncIterator('commentAdded');
  }
}
