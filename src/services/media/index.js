import express from 'express'

const mediaRouter = express.Router()

// =================  Media Object Model ==========================================
// {
//     "Title": "The Lord of the Rings: The Fellowship of the Ring",
//     "Year": "2001",
//     "imdbID": "tt0120737",  //UNIQUE
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
// }
// ================================================================================

// POST Media =====================================================================

mediaRouter.post("/", async ( req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
        
    }
})

// GET Medias (list) (with reviews) ===============================================

mediaRouter.get("/", async ( req, res, next) => {})

// GET Media (single) (with reviews) ==============================================

mediaRouter.get("/:id", async ( req, res, next) => {})

// UPDATE Media ===================================================================

mediaRouter.put("/:id", async ( req, res, next) => {})

// POST Poster to single media ====================================================

mediaRouter.post("/:id", async ( req, res, next) => {})

// DELETE Media ===================================================================

mediaRouter.delete("/:id", async ( req, res, next) => {})


export default mediaRouter