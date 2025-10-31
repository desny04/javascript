let button=document.getElementById("sbt-btn");
let input=document.getElementById("name");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    let data=input.value;
    let parsedarr=JSON.parse(localStorage.getItem("name"))||[];
    parsedarr.push(data);
    localStorage.setItem("name",JSON.stringify(parsedarr));

})

let list=document.getElementById("list")
let showbutton=document.getElementById("shw-btn")

showbutton.addEventListener("click",()=>{

})