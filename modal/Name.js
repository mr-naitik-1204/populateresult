var mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: { type: String, require: true },
   
})
module.exports = mongoose.model('Name', Schema)