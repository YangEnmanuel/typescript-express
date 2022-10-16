import express from 'express'
import { router } from './routes/tasks'

const app = express()

app.use(express.json())
app.use(router)

app.listen(3000)
console.log('Server on port 3000')
