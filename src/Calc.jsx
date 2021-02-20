import React from 'react';
function sum(a,b)
{
    let sum=a+b;
    return sum;

}
function divide(a,b)
{
    let divide=a/b;
    return divide.toFixed(3);

}
function mult(a,b)
{
    let mult=a*b;
    return mult;

}
export {sum,divide,mult};