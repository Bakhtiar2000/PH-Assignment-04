//Problem 01

//The function takes positive number as input and shows input*2+10/2-5 value as output

function mindGame(number)
{
    let result= number*3;
    result+=10;
    result/=2;
    result-=5;

    if(typeof(number)!= 'number')
    {
        return 'Please enter a number as input';
    }

    else if(number<0)
    {
        return 'Please enter a positive number as input';
    }

    else{
        return result;
    }
}

const number= -33;
console.log(mindGame(number));




//Problem 02

//The function shows a string has odd or even number of characters in it

function evenOdd(str)
{

    let sum=0;
    for(let i=0; i<str.length; i++)
    {
        sum++;
    }

    if(typeof(str)!= 'string')
    {
        return 'Please enter a string as input';
    }

    else{
        if(sum%2==0){
            return 'even';
        }
    
        else
        {
            return 'odd';
        }
    }
}

const str= 'Batch7';
console.log(evenOdd(str));


//Problem 03

//The function takes a number as input and subtracts it by 7. Then, it checks the subtracted value is larger than 7 or not. If it is not larger than 7 then returns the subtracted value. Else it returns double of the input value.

function isLGSeven(input)
{

    const sub= input- 7;
    if(typeof(input)!= 'number')
    {
        return 'Please enter a number as input';
    }

    else{
        if(sub< 7)
        {
            return sub;
        }
        else
        {
            return input*2;
        }
    }
}

const input= 15;
console.log(isLGSeven(input));


//Problem 04

//The function finds out the number of bad data (negative numbers) in the array.

function findingBadData(arr)
{
    if(Array.isArray(arr)== false)
    {
        return 'Please enter an array as input';
    }

    else{
        let sum=0;
        for(let i=0; i<arr.length; i++)
        {
            if(arr[i]<0)
            {
                sum++;
            }
        }
        return sum;
    }
}

const arr= [ 2, -5, -7, -13 ];
console.log(findingBadData(arr));


//Problem 05

//The function takes three numbers as input. Then multiplies first one by 21, second one by 32 and third one by 43. Next add these values. If the addition is less than 2000, the function returns the addition value. Else it returns the addition value subtracted by 2000. 

function gemsToDiamond(friend1, friend2, friend3)
{
    let diamond= friend1*21+ friend2*32 + friend3*43;

    if(typeof(friend1)!= 'number' || typeof(friend2)!= 'number' || typeof(friend3)!= 'number')
    {
        return 'Please enter numbers as input';
    }

    else
    {
        if(diamond>2000)
        {
            diamond-= 2000;
            return diamond;
        }
        else 
        {
            return diamond;
        }
    }
}

const friend1= 1;
const friend2= 1;
const friend3= 1;

console.log(gemsToDiamond(friend1, friend2, friend3));