import express from 'express'

const mediaRouter = express.Router()

// POST Media =====================================================================
mediaRouter.post("/", async ( req, res, next) => {})

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