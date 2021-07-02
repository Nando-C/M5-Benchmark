import express from 'express'

const reviewsRouter = express.Router()

// ===================== Reviews Object Model  =========================
// {
//     "_id": "123455", //SERVER GENERATED
//     "comment": "A good book but definitely I don't like many parts of the plot", //REQUIRED
//     "rate": 3, //REQUIRED, max 5
//     "elementId": "5d318e1a8541744830bef139", //REQUIRED = IMDBID
//     "createdAt": "2019-08-01T12:46:45.895Z" // SERVER GENERATED
// }
// =====================================================================

// POST Review to media  ===============================================
reviewsRouter.post("/:mediaId", async ( req, res, next) => {})

// DELETE Review of media ==============================================
reviewsRouter.delete("/:mediaId", async ( req, res, next) => {})

export default reviewsRouter