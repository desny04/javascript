// let sum=function(a,b)
// {
//     let sum=a+b
//     console.log(sum)
// }
// sum(5,10)

// let summ=(a,b)=>
// {
//     let summ=a+b
//     console.log(summ)
// }
// summ(15,10)

// (function(a,b)
// {
//     let sum=a+b;
//     console.log(sum)
// })(10,20)


// function sum(a,b,c)
// {
//     let sum=a+b+c
//     return sum;
// }function outerFn()
// {
//     let a=10;
//     console.log("Outer working started")
//     function innerFn(b)
//     {
//         let sum=a+b
//         console.log("Inner working started")
//         console.log(sum)
//     }
//     console.log("Outer working ended")
//     return innerFn;
// }
// let inner=outerFn()
// inner(30)
// function avg(x,y,z,operation)
// {
//     let avg=operation(x,y,z)/3
//     console.log(avg)
// }
// avg(10,20,15,sum)

// function outerFn()
// {
//     let a=10;
//     console.log("Outer working started")
//     function innerFn(b)
//     {
//         let sum=a+b
//         console.log("Inner working started")
//         console.log(sum)
//     }
//     console.log("Outer working ended")
//     return innerFn;
// }
// let inner=outerFn()
// inner(30)

function factorial(n)
{
    if(n<=1)
    {
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
let output=factorial(5)
console.log(output)