// catch errors that get thrown in async route handlers
// this is a relatively non-invasive change to express
// they get handled in the error.handler middleware
// leave at top of file before importing Routes
import 'express-async-errors'

import express from 'express'
import cors from 'cors'
import http from 'http'
import { Database } from './db'
import * as error from './error'
import router from './routes'
import { Locals } from './locals'
import { loggerMiddleware } from './logger'

export * from './db'

export const server = (db: Database, port: number): http.Server => {
  const app = express()
  app.use(express.json())
  app.use(cors())

  app.use(loggerMiddleware)

  app.use((req, res, next) => {
    const locals: Locals = {
      // @ts-ignore
      logger: req.log,
      db,
    }
    res.locals = locals
    next()
  })

  app.use('/', router)
  app.use(error.handler)

  return app.listen(port)
}

export default server
