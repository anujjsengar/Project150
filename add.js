const mongoose = require('mongoose');
const App = require('./models/Product');

let item = [
    {
        name:"Kushal",
        text:"Hi this is Kushal"
    }
    
];


async function addDB(){
    await App.insertMany(item);
    console.log("Data Added Successfully");
}
module.exports = addDB;
