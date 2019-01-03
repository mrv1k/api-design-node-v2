import express from 'express'
import setupMiddware from './middleware'
import { restRouter } from './api'
import { connect } from './db'
import { signin, protect } from './api/modules/auth'
// Declare an app from express
const app = express()

currentApp.get('/', (req, res) => {
	res.send('Hello World!')
})

currentApp.listen(3000, () => console.log('listening to express'))

export default app
