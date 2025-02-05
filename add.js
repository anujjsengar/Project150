const mongoose = require('mongoose');
const App = require('./models/Product');

let item = [
    {
        name:"HEllo",
        text:"This is Web Testing",
    }
    
];


async function addDB(){
    await App.insertMany(item);
    console.log("Note Added Successfully");
}
module.exports = addDB;
