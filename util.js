const fetch = require('node-fetch');

const getImageBufferByUrl = async url => {
  const result = await fetch(url)
  const buf = await result.buffer()
  return buf;
}

module.exports = {
  getImageBufferByUrl,
}