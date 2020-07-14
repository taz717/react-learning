const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];

console.log(newNumbers);

const person = {
    name: "taz"

};
const newPerson = {
    ...person,
    age: 28
};

console.log(newPerson);

const filter = (...args) => { // I'm not even joking, all this does is check if the value inputed is 1 or not
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));

const number = [1, 2, 3];
[num1, num2] = number;
console.log(num1, num2);