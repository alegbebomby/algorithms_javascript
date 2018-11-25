
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str){
    return str.split("").reduce((reversed, character)=>{
        return character + reversed
    },'');
    
}

module.exports = reverse;

//using array reverse. so we convert string to array reserve the string   then join back
// function reverse(str){
//     return str.split('').reverse().join('');
// }

//manually looping through  the string and adding the character to the beginning of the string

// function reverse(str){
//     var reversed =''
//     for(let chars  of str){
//         reversed = chars + reversed;
//     }
//     return reversed;
// }