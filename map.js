const array1 = ['apple','banana'];
const array2 = ['cat','dog'];
const array3 = ['elepant','frog'];
const array4 = ['gorilla','horse'];
const array5 = array1.concat(array2,array3,array4);
console.log(array5.length);
 
const studentmarks = [
    {
        Science: 70,
        Maths: 82,
        ComputerScience: 80
    },
    {
       Science: 32,
        Maths: 30,
        ComputerScience: 35
    }
    ];
const Objects = studentmarks.map((ele) => Object.values(ele));
console.log(Objects);
const checkFunction = (currValue) => currValue > 40;
const Results = Objects.map(ele => ele.every(checkFunction));
console.log(Results);
const final = Objects.every(ele => ele.every(checkFunction));
console.log(final);
const total = studentmarks.map((ele,index) => ({id:index}));
console.log(total);

const array = [[70,82,80],[32,30,35]];
const flatered = array.flat();
console.log(flatered);