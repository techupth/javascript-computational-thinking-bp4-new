function multiNumber(numbers,n)
{
 for(let i=0; i<numbers.length; i++)
    {
     numbers[i]=numbers[i]*n;
    }
    return console.log(numbers);
}
let number1=[10,20,30];
let number2=[2,4,6];
multiNumber(number1,10);
multiNumber(number2,2);