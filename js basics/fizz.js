for(i=1;i<=100;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log("fizz bus");
    }
    else if(i%3==0)
    {
        console.log("fizz");
    }

    else if(i%5==0)
    {
        console.log("bus")
    }

    else{
        console.log(i)
    }
}

for(i=100; i>=0; i--)
{
    console.log(i);
}


let num = 2022, remainder, sumOfDigits=0;

if(num%2==0)
{
    let revrse = num.toString().split('').reverse().join('');
    console.log(revrse)
}
else{
    console.log("Cant reverse")
}