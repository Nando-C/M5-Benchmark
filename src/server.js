import express from 'express'
import listEndpoints from 'express-list-endpoints'
import cors from 'cors'

import { badRequestMiddleware, notFoundMiddleware, catchErrorMiddleware } from './errorMiddlewares.js'
import mediaRouter from './services/media/index.js'
import reviewsRouter from './services/reviews/index.js'


const server = express()

const port = process.env.PORT || 3001

// =================== MIDDLEWARES ===================================

server.use(cors())
server.use(express.json())

// =================== ENDPOINTS =====================================

server.use("/media", mediaRouter)
server.use("/reviews", reviewsRouter)

// =================== ERROR MIDDLEWARES =============================

server.use(badRequestMiddleware)
server.use(notFoundMiddleware)
server.use(catchErrorMiddleware)

// ===================================================================

console.table(listEndpoints(server))

server.listen(port, () => {
    console.log(" ✅  Server is running on port: " + port)
})