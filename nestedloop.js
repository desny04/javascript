for (let i=1;i<=10;i++)
{
    let rows=" ";
    for(let j=1;j<=10;j++)
    {
        rows+=j+" ";
    }
    console.log(rows)
}

for (let i=1;i<=10;i++)
{
    let rows=" ";
    for(let j=1;j<=i;j++)
    {
        rows+="* ";
    }
    console.log(rows)
}

for (let i=1;i<=10;i++)
{
    let rows=" ";
    for(let j=1;j<=i;j++)
    {
        rows+=i+" ";
    }
    console.log(rows)
}


let num=1;
for (let i=1;i<=10;i++)
{
    let rows=" ";
    for(let j=1;j<=i;j++)
    {
        rows+=num+" ";
        num++;
    }
    console.log(rows)
}

for (let i=1;i<=6;i++)
{
    let rows=" ";
    for(let j=1;j<=i;j++)
    {
        if(i%2==0){
            rows+="@  ";
        }
        else{
            rows+="* ";
        }
    }
    console.log(rows)
}

i=1;
while(i<=10)
{
    let rows=" ";
    j=1;
    while(j<=10)
    {
        rows+=j+" ";
        j++;
    }
    console.log(rows);
    i++;
}

i=1;
while(i<=10)
{
    let rows=" ";
    j=1;
    while(j<=i)
    {
        rows+="* ";
        j++;
    }
    console.log(rows);
    i++;
}

i=1;
while(i<=10)
{
    let rows=" ";
    j=1;
    while(j<=i)
    {
        rows+=i+" ";
        j++;
    }
    console.log(rows)
    i++;
}


let number=1;
i=1;
while(i<=10)
{
    let rows=" ";
    j=1;
    while(j<=i)
    {
        rows+=number+" ";
        number++;
        j++;
    }
    console.log(rows)
    i++;
}

i=1;
while(i<=6)
{
    let rows=" ";
    j=1;
    while(j<=i)
    {
        if(i%2==0)
        {
            rows+="@ ";
        }
        else{
            rows+="* ";
        }
        j++;
    }
    console.log(rows)
    i++
}