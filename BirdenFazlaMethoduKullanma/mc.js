const students=[
    {name: 'can', point:40},
    {name: 'tuba', point:60},
    {name: 'ali', point:25},
    {name: 'eymen', point:35},
    {name: 'serkan', point:75},
    {name: 'çağlar', point:100},
];

const filtered=students.filter(student => student.point<50);

const plusPoint=filtered.map(student => {
    return `${student.name}'s new point ${student.point+15}`;
});

console.log(plusPoint);

const newNotes=students.filter(student => student.point<50).map(student=>
    `${student.name}'s new point ${student.point+15}` ); //Daha temiz bir kod üstteki işlemle aynı işlemi
    //tek satırlık kodla yapabiliyoruz.

    console.log(newNotes);