const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

var subSchema = new Schema({
	name :{
		type:String,
		required:true
	},
	cat : {
        type : Schema.Types.ObjectId,
        ref : 'category'
    }
})

module.exports = mongoose.model('subcategory',subSchema);