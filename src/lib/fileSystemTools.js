import fs from 'fs-extra'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const { readJSON, writeJSON, writeFile } = fs

const getCurrentFolderPath = (currentFile) => dirname(fileURLToPath(currentFile))

const mediaJSONPath = join(dirname(fileURLToPath(import.meta.url)), '../data/media.json')
const reviewsJSONPath = join(dirname(fileURLToPath(import.meta.url)), '../data/reviews.json')

export const getMediaArray = () => readJSON(mediaJSONPath)
export const getReviewsArray = () => readJSON(reviewsJSONPath)

export const writeMedia = (content) => writeJSON(mediaJSONPath, content)
export const writeReview = (content) => writeJSON(reviewsJSONPath, content)

