var http=require('http');
var exp=require('express');
var ejs=require('ejs');
var app=exp();
app.set('view engine','ejs');
app.use('/styles',exp.static('styles'));
app.get('/home',function(req,res){
    res.render('home');
})
app.get('/contact/:id',function(req,res){
    var items={username:req.params.id,followers:560 ,mutual:['tonjiro','zenitsu','kira','denji']}
    res.render('id',{id:req.params.id,item:items});
})
app.get('/contact',function(req,res){
    res.render('contact');
})
app.get('/about',function(req,res){
    res.render('about');
})
app.listen(4000);
