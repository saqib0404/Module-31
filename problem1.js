/* 
1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
*/
const oddNumbers = [1, 3, 5, 7, 9];
// For loop:

// const evenNumbers = []
// for (i = 0; i < oddNumbers.length; i++) {
//     evenNumbers.push(oddNumbers[i] + 1);
// }

const evenNumbers = oddNumbers.map(numbers => numbers + 1)
console.log(evenNumbers)


/* 
2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
*/
const arr = [33, 50, 79, 78, 90, 101, 30];
console.log(arr.filter(num => num % 10 == 0));



/* 
3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
*/

// const arr = [33, 50, 79, 78, 90, 101, 30];
console.log(arr.find(num => num % 10 == 0));