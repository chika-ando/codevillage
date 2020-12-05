//fromCharCode

console.log(String.fromCharCode(189, 43, 190, 61));
console.log(String.fromCharCode(65, 66, 67));  // returns "ABC"
console.log(String.fromCharCode(0x2014));       // returns "—"
console.log(String.fromCharCode(175648)); 

//fromCodePint

console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
console.log(String.fromCodePoint(65, 90));

//charAt

var anyString = 'Brave new world';
// console.log("The character at index 0   is '" + anyString.charAt() + "'");
// No index was provided, used 0 as default

console.log("The character at index 0   is '" + anyString.charAt(0) + "'");
console.log("The character at index 1   is '" + anyString.charAt(1) + "'");
console.log("The character at index 2   is '" + anyString.charAt(2) + "'");
console.log("The character at index 3   is '" + anyString.charAt(3) + "'");
console.log("The character at index 4   is '" + anyString.charAt(4) + "'");
console.log("The character at index 999 is '" + anyString.charAt(16) + "'");
console.log(anyString.length);
console.log(anyString[14]);
