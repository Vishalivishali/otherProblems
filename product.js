const {values} = require('@laufire/utils/collection');

const product = (a,b) => a * b;
console.log(product(2,5));

const splitToDigit = (n) => (n.split('')).reduce((prev, curr) => Number(prev) + Number(curr));
console.log(splitToDigit('12'));

const fruits = [
    {
        Item: 'Apple',
        Units: 20,
    },
    {
        Item: 'Orange',
        Units: 30, 
    },
    {
        Item: 'Guava',
        Units: 10,
    },
];

const getUnitPrice = () => fruits.map((ele) => (ele.Units));
console.log(getUnitPrice());