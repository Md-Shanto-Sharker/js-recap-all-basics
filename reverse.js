const sentence = 'I am learning Web Dev.';

// let reverse='';
// for(const letter of sentence){
//     reverse = letter + reverse
// }
// console.log(reverse);


// let reverse = '';
// for(let i = 0;i<sentence.length; i++){
//     reverse = sentence[i]+ reverse;
// }
// console.log(reverse);


// let reverse = ''
// let n = 0;
// while(n<sentence.length){
//     reverse=sentence[n]+reverse;
//     n++
// }
// console.log(reverse);


// short cut

let reverse = sentence.split('');
console.log(reverse);
let result = reverse.reverse();
console.log(result);
let result2= result.join('');
console.log(result2);