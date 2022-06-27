** Problem 1 **/
function str_reverse(str) {
  return str.split('').reverse().join('');
}

/** Problem 2 **/
function circle_comparator(c1, c2) {
  return c1.radius - c2.radius;  
}
// then we can use this in the sort function


/** Problem 3 **/
function length_of_array(arr) {

  var counter = 0;
  
  arr.forEach(function() {counter++;});
  
  return counter;
}
