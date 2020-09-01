import { issueMessage } from './message'
import { createComment } from './resolver'

export const issues = {
  opened: (context) => {
    return createComment(context, issueMessage.opened)
  },

  reopened: (context) => {
    return createComment(context, issueMessage.reopened)
  },

  closed: (context) => {
    return createComment(context, issueMessage.closed)
  }
}
