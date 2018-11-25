// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// personal solution
//divide the string by half compare beginning to end array helper every
function palindrome(str) {
   return str.split('').every((char,i)=>{
        return char === str[(str.length-1)-i];
    });
    
}

module.exports = palindrome;

//
// function palindrome(str) {
//     var reversed =  str.split('').reverse().join('');
//     return (str ===reversed);
// }

// personal solution
//divide the string by half compare beginning to end
// function palindrome(str) {
//     var arr = str.split('');
//     for(var i =0; i < arr.length/2; i++){
//         if(arr[i] !== arr[(arr.length-1)-i]){
//             return false;
//         }
//         return true;
//     }
  
// }

