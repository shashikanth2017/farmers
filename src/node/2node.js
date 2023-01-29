var server=require('http');
var m=require('fs');
var post=server.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    if(req.url==='/Home'|| req.url==='/'){
        var read=m.createReadStream(__dirname+"/color.html",'utf-8');
        read.pipe(res); 
    }else if(req.url==='/contact'){
        var read=m.createReadStream(__dirname+"/12.html",'utf-8');
        read.pipe(res);    
    }else{
        
    }var read=m.createReadStream(__dirname+"/1.html",'utf-8');
    read.pipe(res);
    
})
     
post.listen(1000,'127.0.0.1');
console.log("hello check on the browser");


// read.on('data',function(chunk){
//     console.log("new small data");
//     write.write(chunk);
// })