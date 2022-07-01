// include file system module 
var fs = require('fs'); 
var data = "Hello !"
 // write data to file sample.html 
fs.writeFile('sample.txt',data, 	
// callback function that is called after writing file is done 	
function(err) {		 		
if (err) throw err; 		
// if no error 		
console.log("Data is written to file successfully.") 
});
