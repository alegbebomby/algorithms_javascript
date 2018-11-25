// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    
    var chunked =[];
    var index =0;
    while(index < array.length) {
        chunked.push(array.slice(index, index+size));
        index = index+size;
    }
   
   return chunked;
}

module.exports = chunk;


// first solution
// var chunked =[];
// for(let val of array){
//     last = chunked[chunked.length -1];
//     if(!last || last.length === size){
//         chunked.push([val]);
//     }else{
//         last.push(val);
//     }
// }

// return chunked;
//my first try
// function chunk(array, size) {
//     var newArr =[];
//     var chunk =[];
//     array.forEach((val,i)=>{
//         if((i)%size ==0  && i!==0){
//             newArr.push(chunk);
//             chunk=[];
//             chunk.push(val);
//         }else{
//             chunk.push(val);
//         }
       
//     })
//     newArr.push(chunk);
//    return newArr;
// }