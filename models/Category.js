const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

var categorySchema = new Schema({
	name :{
		type:String,
		required:true
	}
})

module.exports = mongoose.model('category',categorySchema);