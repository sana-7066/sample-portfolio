const mongoose = require('mongoose');
const validator = require('validator');
const portfolioSchema = new mongoose.Schema({
    name : 
    {
        type : String,
        minlength : 3,
        maxlength : 50,
        required : true,
        validate(value)
        {
            if(validator.isNumeric(value))
            {
                throw new Error("Name should be alphabatic");
            }
        }
    },    email :
     {
        type : String,
        required : true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error('Email not valid');
            }
        }
    },
    message : {
        type : String
    }
})

module.exports = new mongoose.model('contact',portfolioSchema);