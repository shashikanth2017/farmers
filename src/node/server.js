var http=require('http');
var server=http.createServer(function(req,res) {
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('lets create a spectacular project')
    
})
server.listen(1000,'127.0.0.1');
console.log('lets rock');