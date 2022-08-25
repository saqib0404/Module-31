const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
]
let sum = 0;
for (let person of people) {
    sum += person.age;
}
console.log(sum);

const summation = people.reduce((previous, current) => previous + current.age, 0)
console.log(summation)