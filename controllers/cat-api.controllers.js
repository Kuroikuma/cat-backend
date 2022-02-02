const catWiki = require("../cat-axios")
exports.getBreeds = async (req, res, next) => {
  const breeds = []
  try {
    const response = await catWiki.get("/breeds")
    for (let index = 0; index < response.data.length; index++) {
      breeds.push({
        name: response.data[index].name,
        id: response.data[index].id,
      })
    }
    res.send(breeds)
  } catch (error) {
    next(error)
  }
}
exports.getBreedsByID = async (req, res, next) => {
  const breed_id = req.params.breed_id
  const limit = req.params.limit
  try {
    const response = await catWiki.get("/images/search", {
      params: {
        breed_id,
        limit,
      },
    })
    res.send(response.data)
  } catch (error) {
    next(error)
  }
}
exports.getBreedsTop = async (req, res, next) => {
  const limit = req.params.limit
  try {
    const response = await catWiki.get("/breeds", {
      params: {
        limit,
      },
    })
    res.send(response.data)
  } catch (error) {
    next(error)
  }
}
