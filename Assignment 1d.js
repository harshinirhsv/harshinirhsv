Question :Write a factorial function that returns the
 factorial of a given number, n. 
Make sure you return the calculated value and
 not just print it. [function factorial(n){...}]

Solution:

function factorial(n) {

  if (n < 0) return;

  if (n < 2) return 1;

  return n * factorial(n - 1);

}
