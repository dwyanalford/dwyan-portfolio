const mongoose = require('mongoose')
const validator = require('validator')

// define the model
const Contact = mongoose.model('Contact', {
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
    }
})

module.exports = Contact