const fs = require('fs/promises')
const dataPath = require('./dataPath')
const getAll = async () => {
  const data = await fs.readFile(dataPath)
  const peaple = JSON.parse(data)
  return peaple
}

module.exports = getAll