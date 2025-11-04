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

function display(){
    let html=" "
    let data=JSON.parse(localStorage.getItem("name"));
    data.forEach((element, index)=> {
        html+=`<li>${element}<button onclick="handleDelete(${index})">delete</button></li>`
    });
    list.innerHTML=html;
}

function handleDelete(ind){

    let arr=JSON.parse(localStorage.getItem("name"));
    arr.splice(ind,1);
    localStorage.setItem("name",JSON.stringify(arr));
    display();
}

