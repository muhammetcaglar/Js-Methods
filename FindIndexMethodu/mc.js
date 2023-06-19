const points=[70,65,25,35,10,80,100];

const arrayIndex=points.findIndex(point=> point==35);
points[arrayIndex]=45;
console.log(points);
const students=[
    {name: 'can', point:40},
    {name: 'tuba', point:60},
    {name: 'ali', point:25},
    {name: 'serkan', point:100},
];

const objectIndex=students.findIndex(student=> student.name=='ali');
students[objectIndex].name='çağlar';
console.log(students);

const objectIndexPoint=students.findIndex(student=> student.point==40);
students[objectIndexPoint].point=70;
console.log(students);