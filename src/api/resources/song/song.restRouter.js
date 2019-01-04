import express from 'express'
import songController from './song.controller'

export const songRouter = express.Router()

songRouter.route('/')
  .get(songController.getAll)
  .post(songController.createOne)

songRouter.route('/:id')
  .get(userController.getOne)
  .put(userController.updateOne)
  .delete(userController.deleteOne)
