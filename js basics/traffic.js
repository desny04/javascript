let color="red";

switch(color)
{
    case "red":console.log("Stop");
    break;

    case "yellow":console.log("Get Ready");
    break;

    case "green":console.log("Go");
    break;
}


let age=60;

if(age<18)
{
    console.log("Not Eligible to vote")
}

else if(age>=18 && age<=59)
{
    console.log("Eligible to vote")
}

else
{
    console.log("Eligible (Senior Citizen)")
}



let side1=21;
let side2=23;
let side3=20;

if(side1==side2 && side2==side3){

    console.log("Equilateral")
    
}

else if(side1==side2 && side2!=side3){
    
    console.log("Isosceles")
    
}

else{
    console.log("Scalene")
}

let number=0;

if(number>0){
    console.log("Number is Positive")
}

else if(number<0){
    console.log("Number is Negative")
}

else{
    console.log("Number is Zero")
}


let mark=29

if(mark>=90){
    console.log("Grade A")
}

else if(mark>=70){
    console.log("Grade B")
}

else if(mark>=50){
    console.log("Grade C")
}

else if(mark>=40){
    console.log("Grade D")
}

else if(mark>=30){
    console.log("Grade E")
}

else{
    console.log("Grade F")
}


let num=3;
if(num%2==0){
    console.log("Number is Even")
}

else{
    console.log("Number is Odd")
}


let username="admin";
let password=1234;

if(username=="admin" && password==1234)
{
    console.log("Login Successfully")
}

else if(username=="admin" && password!=1234)
{
    console.log("Incorrect Password")
}

else{
    console.log("Incorrect Username")
}




