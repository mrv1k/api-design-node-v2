import mongoose from 'mongoose'
import config from './config'
mongoose.Promise = global.Promise

export const connect = () => {
  return mongoose.connect(config.dbUrl, {
    useMongoClient: true
  })
}
