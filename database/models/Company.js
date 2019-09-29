const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
    ownername: {
        type: String,
        required: [true, 'Please provide your owner name']
    },
    Companyname: {
        type: String,
        required: [true, 'Please provide your Company name']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide your email.']
    },
    pan: {
        type: String,
        required: [true, 'Please provide your PAN.']
    },
    description: {
        type: String,
        required: [true, 'Please provide your description.']
    },
    Contact: {
        type: String,
        required: [true, 'Please provide your adhaar.']
    },
    address: {
        type: String,
        required: [true, 'Please provide your password.']
    },
    password: {
        type: String,
        required: [true, 'Please provide your password.']
    },
    role: {
        type: String,
        default:"company"
    },
    status:{
        type: String,
        default : "NotActive"
    }
})

CompanySchema.pre('save', function (next) {
    const company = this

    bcrypt.hash(company.password, 10, function (error, encrypted) {
        company.password = encrypted
        next()
    })
})

module.exports = mongoose.model('Company', CompanySchema)
