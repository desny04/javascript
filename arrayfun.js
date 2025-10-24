let arr=[1,2,3,4,5,6,7,8,9]

arr.forEach((elem,index)=>{
    elem+=10
    console.log(index+":"+elem)
})

let brr=arr.map((elem,index)=>{
    return elem+=10
})
console.log(brr)

let even=arr.find((elem,index)=>{
    return elem%2==0
})
console.log(even)

let evenum=arr.filter((elem,index)=>{
    return elem%2==0
})
console.log(evenum)

let sum=arr.reduce((accumilator,elem)=>{
    return accumilator+=elem;
})
console.log(sum)