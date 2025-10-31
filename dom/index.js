let button=document.getElementById("sbt-btn")
let input=document.getElementById("name")

button.addEventListener("click",(event)=>{
    event.preventDefault();

    let data=input.value;
    localStorage.setItem("name",data)
})

let list=document.getElementById("list")
let showbutton=document.getElementById("shw-btn")

showbutton.addEventListener("click",()=>{

    let user=localStorage.getItem("name")
    
    list.innerHTML=`<li>${user}</li>`

})