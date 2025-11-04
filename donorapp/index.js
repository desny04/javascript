let tbody=document.getElementById("body");

function display(){

    let data=JSON.parse(localStorage.getItem("Data"));
    let html="";
    data.forEach((element,index)=>{
        html+=`<tr>
        <td>${element.name}</td>
        <td>${element.phone}</td>
        <td>${element.gender}</td>
        <td>${element.blood}</td>
        <td><button onclick='handleEdit(${index})'>edit</button> <button onclick='handleDelete(${index})'>delete</button>
        </tr>`
    });

    tbody.innerHTML=html;
}
display();

function handleEdit(index){
    let data=JSON.parse(localStorage.getItem("Data"));

    let input1=prompt("Enter Your Name",data[index].name);
    let input2=prompt("Enter Your Phone Number",data[index].phone);
    let input3=prompt("Enter Your Gender",data[index].gender);
    let input4=prompt("Enter Your Blood Group",data[index].blood);


    let input={
        name:input1,
        phone:input2,
        gender:input3,
        blood:input4
    }

    data.splice(index,1,input);

    localStorage.setItem("Data",JSON.stringify(data));
    display();

}

function handleDelete(index){

    let data=JSON.parse(localStorage.getItem("Data"));
    let bool=confirm("Do You Want To Delete?")
    if(bool==true)
    {
        data.splice(index,1);
    }

    localStorage.setItem("Data",JSON.stringify(data));
    display();
}

document.getElementById("search").addEventListener("keyup",()=>{
    let searched=document.getElementById("search").value;
})
