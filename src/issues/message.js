import { message } from '../common/message'

export const issueMessage = {
  // New issue got opened
  opened: `${message.beginAppreciate} you for taking time to log the issue. ${message.reviewSoon}.`,

  // Existing issue got reopened
  reopened: `${message.beginAppreciate} you for reopening this issue. ${message.reviewSoon}.`,

  // Issue got closed
  closed: `${message.beginAppreciate} you for closing this issue. ${message.feelFree} reopen this issue in case you find the issue still exist.`
}
