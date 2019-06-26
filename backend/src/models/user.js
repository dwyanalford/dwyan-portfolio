const mongoose = require('mongoose')
const { Schema } = mongoose
const validator = require('validator')
// const moment = require('moment')

// define the model
const userContact = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true, // Always convert `test` to lowercase
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email provided is invalid')
            }
        }
    },
    reason: {
        type: String,
        default: 'General'
    },
    message: {
        type: String,
        trim: true,
        required: true
    },
    messageDate: {
        type: String,
        default: Date()
    }
})

const Contact = mongoose.model('Contact', userContact)

module.exports = Contact