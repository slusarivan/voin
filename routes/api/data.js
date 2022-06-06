const express = require('express')
const {BadRequest} = require('http-errors')
const {Person} = require('../../models')
const Joi = require('joi')

// const data = require('../../data')
const joiSchema = Joi.object({
    emailPerson: Joi.string().email({minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ru'] }}).required(),
})

const router = express.Router()

router.post('/', async (req, res, next) => {
    try {
        const { error } = joiSchema.validate(req.body)
        if (error) {
            throw new BadRequest(error.message)
        }
        const result = await Person.create(req.body)
        res.status(201).json({
            status: 'success',
            code: 201,
            data: {
                result
            }
        })
    } catch (error){
        next(error)
    }
    
})
// JKRiyVFXSqd6zNFX
// 
module.exports = router