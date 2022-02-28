require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.NODE_ENV === 'test' 
? process.env.TEST_MONGODB_URI
: process.env.MONGODB_URI

let ENV = process.env.NODE_ENV

module.exports = {
  MONGODB_URI,
  PORT,
  ENV
}