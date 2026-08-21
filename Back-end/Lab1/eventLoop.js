console.log("This is the starting point of my code");
process.nextTick(()=>{
    console.log("This process.nextTick operation");
})
setTimeout(() => {
    console.log("This is first timeout operation");
},10000);

setTimeout(() =>{
    console.log("This is second timeout operation")
},5000)
console.log("This is the end point of my code");