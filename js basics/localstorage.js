let frm=document.getElementById("frm")

frm.addEventListener("submit",(event)=>{
    event.preventDefault();

    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let mark=document.getElementById("mark").value;
    let std=document.getElementById("std").value;

    let frmdata={
        name:name,
        age:age,
        mark:mark,
        std:std

    }

    let obj=JSON.stringify(frmdata)

    localStorage.setItem("userdata",obj)

})

document.getElementById("showbtn").addEventListener("click",()=>{

    let data=JSON.parse(localStorage.getItem("userdata"))
    document.getElementById("table").innerHTML+=`<tr>
        <td>${data.name}</td>
        <td>${data.age}</td>
        <td>${data.mark}</td>
        <td>${data.std}</td>
    </tr>`
})