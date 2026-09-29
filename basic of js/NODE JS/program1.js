// const EventEmitter = require('events');
// // here eventEmitter is a predefined class that it is provided by the built-in events module in Node.js. It allows us to create and handle custom events in our applications.

// // Create an instance of EventEmitter
// const object= new EventEmitter()
// object.on('greet',(name)=>{
//      console.log(`Hello there 2B ${name}`) //callback function is executed when the 'greet' event is emitted
// })
// object.on('exit',(name)=>{
//     console.log(`Exiting with code ${name}`)
// })
// object.emit('greet','DEEPANSHI')
// object.emit('exit','DEEPANSHI')

const EventEmitter = require('events');
class Button extends EventEmitter{
    click(){
        this.emit('click');
    }
}
const button = new Button();
button.on('click',()=>{
    console.log('Button was clicked');
})
button.click();

console.log("start")
setTimeout(()=>{
    console.log("setTimeout")
},2000)
set.Immediate(()=>{
    console.log("setImmediate")
})
set