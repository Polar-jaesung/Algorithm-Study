
let numbers=[1,2,3,4,5]
let n1=2;

function cuttingArray(numbers) {

 const splArr= numbers.splice(n1,2);
 return numbers;
 
};

console.log(cuttingArray(numbers));