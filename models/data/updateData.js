const fs = require('fs/promises')
const dataPath = require('./dataPath')

const updateContacts = async (newData) => {
  const dataStr = JSON.stringify(newData)
  await fs.writeFile(dataPath, dataStr)
}
module.exports = updateContacts