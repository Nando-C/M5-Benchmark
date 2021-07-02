import express from 'express'
import { getMediaArray, getReviewsArray, writeReview } from '../../lib/fileSystemTools.js'
import uniqid from 'uniqid'

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

reviewsRouter.post("/:imdbID", async ( req, res, next) => {
    try {
        const mediaArr = await getMediaArray()
        const media = mediaArr.find(media => media.imdbID === req.params.imdbID)

        if (media) {
            const reviewsArr = await getReviewsArray()
            const newReview = {
                _id: uniqid(), 
                ...req.body,
                createdAt: new Date()
            } 
    
            reviewsArr.push(newReview)
    
            await writeReview(reviewsArr)
    
            res.status(201).send(newReview)
           
        } else {
            next(createError(404, `Media with imdbID ${req.params.imdbID} not found!`))
        }
    } catch (error) {
        next(error)
    }
})

// DELETE Review of media ==============================================
reviewsRouter.delete("/:id", async ( req, res, next) => {
    try {
        const reviewsArr = await getReviewsArray()
        const review = reviewsArr.find(review => review._id === req.params.id)

        if(review) {
            const remainingReviews = reviewsArr.filter(review => review._id !== req.params.id)

            await writeReview(remainingReviews)

            res.status(204).send()
        } else {
            next(createError(404, `Review with id ${req.params.id} not found!`))
        }
    } catch (error) {
        next(error)
    }
})

export default reviewsRouter