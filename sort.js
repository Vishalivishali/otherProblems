const studentRanks = [
    {
        student: 'vishali',
        rank: 4
    },
    {
        student: 'megala',
        rank: 3
    },
    {
        student: 'roshini',
        rank: 2
    },
    {
        student: 'geetha',
        rank: 1
    },
    ]
    
    const array = () => studentRanks.sort((a,b) => a.rank - b.rank);
    console.log(array());
    