const { v4 } = require('uuid')
const getAll = require('./data/getAll')
const updateData = require('./updateData')

const addData = async (body) => {
    const data = await getAll()
    const newData = { ...body, id: v4() }
    data.push(newData)
    await updateData(data)
    return data
}

module.exports = {
    addData
}