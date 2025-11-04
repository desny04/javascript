let button=document.getElementById("btn")

button.addEventListener("click",(event)=>{
    event.preventDefault();

    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let mark=document.getElementById("mark").value;
    let std=document.getElementById("std").value;

    let arr=[name,age,mark,std]
    console.log(arr)

    document.getElementById("table").innerHTML+=`<tr>
        <td>${name}</td>
        <td>${age}</td>
        <td>${mark}</td>
        <td>${std}</td>
    </tr>`

})
