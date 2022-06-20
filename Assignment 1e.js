
Write a javascript function that converts a given amount of money into coins of
 denominations (1, 2, 5, 10 and 25).
 [function convert_to_coins(amount) {...}].
 You may choose to print the coin denominations
 used on the console. E.g. convert_to_coins(87)
 should print 25 25 25 10 2.

Solution:
function amountTocoins(amount, coins)
 {
 if (amount === 0) { 
return [];
 }
 else
 {
 if (amount >= coins[0])
 { 
left = (amount - coins[0]); 
return [coins[0]].concat( amountTocoins(left, coins) );
 } 
else
 {
 coins.shift();
 return amountTocoins(amount, coins); 
} } }
 console.log(amountTocoins(46, [25, 10, 5, 2,1]));
