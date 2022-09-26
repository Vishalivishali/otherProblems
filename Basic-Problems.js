const {map,reduce,filter} = require('@laufire/utils/collection');
const rates = {
    Carrot: 10,
    Apple: 200,
    Guava: 50,
};

map(rates,ele => console.log(ele));
console.log(reduce(rates,(a,b) => a + b,0));
console.log(filter(rates,ele => ele > 50));

const words = ['Python','javascript','Go','java','PHP','Ruby'];

console.log(filter(words,(ele => ele.length < 6)));


const monday = [
    {
        'name'     : 'Write a tutorial',
        'duration' : 180
    },
    {
        'name'     : 'Some web development',
        'duration' : 120
    }
];

const tuesday = [
    {
        'name'     : 'Keep writing that tutorial',
        'duration' : 240
    },
    {
        'name'     : 'Some more web development',
        'duration' : 180
    },
    {
        'name'     : 'A whole lot of nothing',
        'duration' : 240
    }
];
 
const tasks = [monday, tuesday];

const data = reduce(tasks,((prev, curr) => prev.concat(curr)),[]);
console.log(data);
const getHour = data.map((ele) => ele.duration/=60);
console.log(getHour);
console.log(filter(data,((ele) => ele.duration > 2)));