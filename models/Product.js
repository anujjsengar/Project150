const mongoose = require('mongoose');


let schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    text:{
        type:String,
        required:true,
        trim:true
    }
});

let App = mongoose.model('App',schema);

module.exports = App;