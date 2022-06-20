Question:Write a JavaScript program to convert
 temperatures to and from celsius, fahrenheit. 
[ Use the formula : c/5 = (f-32)/9,
 where c = temperature in celsius and 
f = temperature in fahrenheit]

Solution:
HTML Code:

<!DOCTYPE html> 
<html> 
<head> 
<meta charset="utf-8">
 <title>Write a JavaScript program to convert temperatures to and from celsius, fahrenheit</title> 
</head>
 <body> 
</body> 
</html> 

Js code:
function cToF(celsius) {
 var cTemp = celsius;
 var cToFahr = cTemp * 9 / 5 + 32; 
var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.'; 
console.log(message); 
}
 function fToC(fahrenheit) { 
var fTemp = fahrenheit;
 var fToCel = (fTemp - 32) * 5 / 9;
 var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
 console.log(message); 
}
 cToF(60);
 fToC(45);

