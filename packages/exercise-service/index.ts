import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'

import exercisesApi from './src/routes/exercises'

dotenv.config()
const domain = process.env.DOMAIN || '127.0.0.1'
const port = process.env.PORT ? parseInt(process.env.PORT) : 3001

const app = express()

// Configuration
app.disable('x-powered-by')

// Middleware
app.use(cors({
  origin: '*'
}))
app.use(helmet())
app.use(express.json())

// Routes
app.use(exercisesApi)

export default app.listen(port, domain, () => {
  console.log(`Server running at http://${domain}:${port}/`)
})
