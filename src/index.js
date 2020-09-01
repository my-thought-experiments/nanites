import { issues } from './issues'

/**
 * This is the entry point for your Probot App.
 * @param {import('probot').Application} app - Probot's Application class.
 */
module.exports = app => {

  app.on('issues.opened', async context => {
    return issues.opened(context)
  })

  app.on('issues.reopened', async context => {
    return issues.reopened(context)
  })

  app.on('issues.closed', async context => {
    return issues.closed(context)
  })

}
