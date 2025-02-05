const express = require('express')
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const addDB = require('./add');
const productRoute = require('./routes/product');
const methodOverride = require('method-override');
mongoose.connect('mongodb://127.0.0.1:27017/TestFirst')
.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log("DB Not Connected");
})

// addDB();
app.set('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(productRoute);

app.get('/',(req,res)=>{
    res.send('This is route');
    console.log("This is Root Route");
    
})
app.listen(8080,()=>{
    console.log('Server Found');
})