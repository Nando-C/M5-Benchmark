import express from 'express'
import { getMediaArray, writeMedia } from '../../lib/fileSystemTools.js'

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

mediaRouter.post("/", async( req, res, next) => {
    try {
        const mediaArr = await getMediaArray()
        
        const newMedia = req.body
        mediaArr.push(newMedia)

        await writeMedia(mediaArr)

        res.status(201).send({newMedia})
    } catch (error) {
        next(error)
        
    }
})

// GET Medias (list) (with reviews) ===============================================

mediaRouter.get("/", async ( req, res, next) => {
    try {
        const mediaArr = await getMediaArray()

        res.send(mediaArr)
    } catch (error) {
        next(error)
    }
})

// GET Media (single) (with reviews) ==============================================

mediaRouter.get("/:imdbID", async ( req, res, next) => {
    try {
        const mediaArr = await getMediaArray()
        const media = mediaArr.find(media => media.imdbID === req.params.imdbID)
        if (media) {
            res.send(media)
        } else {
            next(createError(404, `Media with imdbID ${req.params.imdbID} not found!`))
        }
    } catch (error) {
        next(error)
    }
})

// UPDATE Media ===================================================================

mediaRouter.put("/:imdbID", async ( req, res, next) => {
    try {
        const mediaArr = await getMediaArray()
        const media = mediaArr.find(media => media.imdbID === req.params.imdbID)

        if (media) {
            const remainingMedia = mediaArr.filter(media => media.imdbID !== req.params.imdbID)

            const modifiedMedia = { imdbID: req.params.imdbID, ...media, ...req.body}

            remainingMedia.push(modifiedMedia)
            await writeMedia(remainingMedia)

            res.send(modifiedMedia)
        } else {
            next(createError(404, `Media with imdbID ${req.params.imdbID} not found!`))
        }
    } catch (error) {
        next(error)
    }
})

// DELETE Media ===================================================================

mediaRouter.delete("/:imdbID", async ( req, res, next) => {
    try {
        const mediaArr = await getMediaArray()
        const media = mediaArr.find(media => media.imdbID === req.params.imdbID)

        if (media) {
            const remainingMedia = mediaArr.filter(media => media.imdbID !== req.params.imdbID)

            await writeMedia(remainingMedia)

            res.status(204).send()
        } else {
            next(createError(404, `Media with imdbID ${req.params.imdbID} not found!`))
        }
    } catch (error) {
        next(error)
    }
})

// POST Poster to single media ====================================================

mediaRouter.post("/:imdbID", async ( req, res, next) => {})



export default mediaRouter