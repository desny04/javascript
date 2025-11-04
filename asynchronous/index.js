console.log("before settimeout");

let a=10;
let abc=setInterval(()=>{
    console.log(a)
    a++;
},1000)

setTimeout(()=>{
    clearInterval(abc);
    console.log("Timeout worked")
},10000)

console.log("After settimeout")