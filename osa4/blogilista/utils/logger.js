const conf = require('./config')

const info = (...params) => {
  if(conf.ENV !== 'test')
    console.log(...params)
}
  
const error = (...params) => {
  if(conf.ENV !== 'test')
    console.error(...params)
}
  
module.exports = {
  info, error
}