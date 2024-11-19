var mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: { type: String, require: true },
    resultid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mark"
    }
})

module.exports = mongoose.model('Name', Schema)