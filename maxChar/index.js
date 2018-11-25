// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let max =0;
    let maxChar ='';
    var charMap ={};
    for(let char of str){
        if(!charMap[char]){
            charMap[char] =1;
        }else{
            charMap[char] = charMap[char]+1;
        }
     
    }
    //console.log(charMap);

    for (let char in charMap){ 
        if(charMap[char] > max){
            max =  charMap[char];
            maxChar = char;
        }
    }
    return maxChar;

}

module.exports = maxChar;


// function maxChar(str) {
//     var chars ={};
//     for(let char of str){
//         chars[char]? chars[char]++ : 1;
//     }
//     return chars;
// }