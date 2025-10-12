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


let age=59;

if(age<18)
{
    console.log("Not Eligible to vote")
}

else if(age>=18 && age<=59)
{
    console.log("Eligible to vote")
}

else if(age>=60)
{
    console.log("Eligible (Senior Citizen)")
}



let side1=23;
let side2=23;
let side3=20;

if(side1==side2 && side2==side3){

    console.log("Equilateral")
    
}

else if(side1==side2 && side2!=side3){
    
    console.log("Isosceles")
    
}

else if(side1!=side2 && side2!=side3){
   
      console.log("Scalene")
    
}

let number=-2;

if(number>0){
    console.log("Number is Positive")
}

else if(number<0){
    console.log("Number is Negative")
}

else if(number=0){
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

else if(mark<30){
    console.log("Grade F")
}




