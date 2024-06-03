const http = require('http');
const fs = require('fs');
//creating raw server 
const server = http.createServer()
//server listenign 
server.on('request',(req,res)=>{
    if(req.url==="/read-file" && req.method==="GET"){
    const readAbleStream=fs.createReadStream("./texts/megaText.txt")

    readAbleStream.on('data',(buffer)=>{
        res.write(buffer)
    })

    readAbleStream.on('end',()=>{
        res.end("Hello World ")
    })
    }
    
})

server.listen(5000,()=>{
    console.log("server is ok ")
})