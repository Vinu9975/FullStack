const mongoose = require("mongoose")

const ticketSchema = new mongoose.Schema(
	{
    Uname:{type:String},
		Email:{type: String},
		desc: {type: String},
    CreatedDate:{type:String},
    UpdateDate:{type:String,default:"--"},
    DeleteDate:{type:String,default:"--"},
    isDelete:{type:Boolean,default: 'false'}
		
	}
	
)

module.exports = mongoose.model("Ticket", ticketSchema)