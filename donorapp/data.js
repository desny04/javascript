let form=document.getElementById("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let data=JSON.parse(localStorage.getItem("Data"))||[];

    let input1=document.getElementById("name");
    let input2=document.getElementById("phone");
    let input3=document.querySelector('input[type="radio"]:checked');
    let input4=document.getElementById("blood");
    let input={
        name:input1.value,
        phone:input2.value,
        gender:input3.value,
        blood:input4.value
    }
    data.push(input);
    localStorage.setItem("Data",JSON.stringify(data));

    location.href="./index.html"
})