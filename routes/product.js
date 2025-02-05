const express = require('express');
const router = express.Router();
const App = require('../models/Product');

router.get('/products',async(req,res)=>{
        let item = await App.find();
        res.render('index',{item});
})
router.get('/product/new',(req,res)=>{
    res.render('new');
})

router.post('/products',async(req,res)=>{
    let {name,text} = req.body;
    await App.create({name,text});
    res.redirect('/products');
})
router.get('/products/:id',async(req,res)=>{
    let {id} = req.params;
    let find = await App.findById(id);
    res.render('show',{find});
})
router.get('/products/:id/edit',async(req,res)=>{
    let {id} = req.params;
    let find = await App.findById(id);
    res.render('edit',{find});
})
router.patch('/products/:id',async(req,res)=>{
    let {id} = req.params;
    let {name,text} = req.body;
    await App.findByIdAndUpdate(id,{name,text});
    res.redirect('/products');
})
router.delete('/products/:id',async(req,res)=>{
    let {id} = req.params;
    await App.findByIdAndDelete(id);
    res.redirect('/products');
})
module.exports = router;