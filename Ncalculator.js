// Returns addition of two numbers
 exports.add = function (a, b)
 { 
return a+b; 
};
 // Returns difference of two numbers
 exports.subtract = function (a, b) 
{ 
return a-b; }; 
// Returns product of two numbers 
exports.multiply = function (a, b) 
{
 return a*b;
 };
var calculator = require('./calculator'); 
var a=10, b=5; 
console.log("Addition : "+calculator.add(a,b));
 console.log("Subtraction : "+calculator.subtract(a,b)); 
console.log("Multiplication : "+calculator.
