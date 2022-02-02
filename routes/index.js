const express = require("express")
const router = express.Router()

const catCotroller = require("../controllers/cat-api.controllers")

module.exports = function () {
  router.get("/api/breeds", catCotroller.getBreeds)
  router.get("/api/breeds/search/:breed_id/:limit", catCotroller.getBreedsByID)
  router.get("/api/breeds/top/:limit", catCotroller.getBreedsTop)
  return router
}
