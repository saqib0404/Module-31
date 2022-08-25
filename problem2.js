/* 
1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/
const array = [ 1, 9, 17, 22 ];
// For loop:
let sum = 0;
for (let number of array){
    sum += number;
}
console.log(sum);

// REduce Method:
const summation = array.reduce( (previous, current) => previous + current , 0);
console.log(summation);