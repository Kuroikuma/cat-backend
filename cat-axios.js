const axios = require("axios")

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
})

// Alter defaults after instance has been created
instance.defaults.headers.common["x-api-key"] =
  "3ae4f84d-d320-4e62-bb97-f1910b82942e"
module.exports = instance
