const express = require('express');
const logger = require('morgan')
const cors = require('cors')


const {dataRouter} = require('./routes/api')
const app = express()


const formatLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatLogger))

app.use(cors())
app.use(express.json())

app.use('/api/data', dataRouter)

app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        code: 404,
        message: 'not found'
    })
})

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message})
})

module.exports = app
// app.listen(5050)