var mongoose = require('mongoose')

const Schema = new mongoose.Schema({

    gujrati: { type: String },
    hindi: { type: String },
    sanskrut: { type: String },
    english: { type: String },
    scince: { type: String }
})

module.exports = mongoose.model('Mark', Schema)