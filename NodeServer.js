const http = require('http');

const server = http.createServer()

server.on('request',(req,res)=>{
    console.log(req.url,req.method);
    res.end("Hello World ")
})

server.listen(5000,()=>{
    console.log("server is ok ")
})