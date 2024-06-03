const EventEmiter = require("events")
const myEmiter = new EventEmiter()


myEmiter.on("birthday",()=>{
    console.log('happy birthday')
})
myEmiter.on("birthday",(...gift)=>{
    console.log(`i will gift you a ${gift.join(' and ')}`)
})

myEmiter.emit('birthday',"bike")

