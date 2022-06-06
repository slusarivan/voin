const app = require('../index')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()


const {DB_HOST} = process.env

const PORT = process.env.PORT || 5050

mongoose.connect(DB_HOST)
    .then(() => {
        app.listen(PORT, () => {
        console.log('serner run')
        })
    })
    .catch(error => {
        console.log(error.message)
        process.exit(1)
    })

