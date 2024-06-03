const fs =require('fs')

const readText=fs.readFile('./texts/text.txt','utf-8',(err,data)=>{
    if(err) throw err;
     console.log(data)
})

console.log(readText)


console.log("work is done")
