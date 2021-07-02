import express from 'express'

const server = express()

const port = process.env.PORT || 3001

// =================== MIDDLEWARES ===================================
// =================== ENDPOINTS =====================================
// =================== ERROR MIDDLEWARES =============================
// ===================================================================

server.listen(port, () => {
    console.log(" ✅  Server is running on port: " + port)
})