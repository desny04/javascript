
let submit=document.getElementById("form")
let input1=document.getElementById("name")
let input2=document.getElementById("phone")
let input3=document.getElementById("female")
let input4=document.getElementById("male")
let input5=document.getElementById("other")
let input6=document.getElementById("blood")

submit.addEventListener("submit",(event)=>{
    event.preventDefault();

    let data=input1.value;
    let parsedarr=JSON.parse(localStorage.getItem("name"))||[];
    parsedarr.push(data);
    localStorage.setItem("name",JSON.stringify(parsedarr));
    
    let data2=input2.value;
    let parsedarr2=JSON.parse(localStorage.getItem("phone"))||[];
    parsedarr.push(data2);
    localStorage.setItem("phone",JSON.stringify(parsedarr2));
    
    let data3=input3.value;
    let parsedarr3=JSON.parse(localStorage.getItem("female"))||[];
    parsedarr3.push(data3);
    localStorage.setItem("female",JSON.stringify(parsedarr3));
    
    let data4=input4.value;
    let parsedarr4=JSON.parse(localStorage.getItem("male"))||[];
    parsedarr4.push(data4);
    localStorage.setItem("male",JSON.stringify(parsedarr4));
    
    let data5=input5.value;
    let parsedarr5=JSON.parse(localStorage.getItem("other"))||[];
    parsedarr5.push(data5);
    localStorage.setItem("other",JSON.stringify(parsedarr5));
    
    let data6=input6.value;
    let parsedarr6=JSON.parse(localStorage.getItem("blood"))||[];
    parsedarr6.push(data6);
    localStorage.setItem("blood",JSON.stringify(parsedarr6));
    
})