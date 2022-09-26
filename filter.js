const file = require('./RandomString.js');
const arrays = [10,20,30,50,60,70,80];
const filtered = arrays.filter(arrays => arrays > 50);
console.log(filtered);


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
    const markArrays = Objects.flat()
    console.log(markArrays);
    const totals = markArrays.filter(mark => mark > 50);
    console.log(totals);


const studentMarks = [
    {
        Science: 70,
        Maths: 82,
        ComputerScience: 80,
        Tamil: 85,
        English: 86
    },
    {
        Science: 32,
        Maths: 30,
        ComputerScience: 35,
        Tamil: 33,
        English: 34

    }
];
 const markArray = studentMarks.map((ele) => Math.min(...Object.values(ele)));
 console.log(markArray);

 
 const markList= [
    {
        Science: 70,
        Maths: 82,
        ComputerScience: 80,
        Tamil: 85,
        English: 86
    },
    {
        Science: 32,
        Maths: 30,
        ComputerScience: 35,
        Tamil: 33,
        English: 34
    }
];
console.log(markList);
 const array = markList.map((ele,index) => ({...{id: index},...ele}));  
 console.log(array); 


 const subjects = [
    {
        Science: 70,
        Maths: 82,
        ComputerScience: 80,
        Tamil: 85,
        English: 86
    },
    {
        Science: 32,
        Maths: 30,
        ComputerScience: 35,
        Tamil: 33,
        English: 34
    }
];
console.log(subjects);
const list = subjects.map((ele,index) => ({...{Name: `${file.getRandomString(5)}`},...ele}));
console.log(list);



 
const subject = [
    {
        Science: 70,
        Maths: 82,
        ComputerScience: 80,
        Tamil: 85,
        English: 86
    },
    {
        Science: 32,
        Maths: 30,

        ComputerScience: 35,
        Tamil: 33,
        English: 34
    }
];
const markLists = subject.map((ele,index) => ({...{id: index},...{Name: `${file.getRandomString(5)}`},...ele}));
console.log(markLists);

const subjectMarks = [
    {
        Science: 70,
        Maths: 82,
        ComputerScience: 80,
        Tamil: 85,
        English: 86
    },
    {
        Science: 32,
        Maths: 30,

        ComputerScience: 35,
        Tamil: 33,
        English: 34
    }
];
const total = subjectMarks.map((ele) => (Object.values (ele)).reduce ((prev,curr) => prev + curr));
const lists = subjectMarks.map((ele,index) => ({...{Name: `${file.getRandomString(5)}`},...{total: totals[index]},...ele}));
console.log(lists);