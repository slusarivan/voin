const { Schema, model } = require('mongoose')

const personSchema = Schema({
    emailPerson: String,
}, {versionKey: false, timestamps: true})

const Person = model('person', personSchema)

module.exports = Person