import express from 'express'
import playlistController from './playlist.controller'

export const playlistRouter = express.Router()

playlistRouter.route('/')
  .get(songController.getAll)
  .post(songController.createOne)

playlistRouter.route('/:id')
  .get(userController.getOne)
  .put(userController.updateOne)
  .delete(userController.deleteOne)
