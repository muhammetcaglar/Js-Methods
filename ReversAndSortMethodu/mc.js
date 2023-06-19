const names =['can','ali','veli','emre','çağlar','serkan'];//Ç ingilizcede yok o yüzden en başa çağlarr geliyor.

names.sort();
console.log(names);
names.reverse();
console.log(names);


const points=[70,65,25,3,10,80,100];

points.sort((a,b)=>b-a);
console.log(points);


// points.sort();//İlk karaktere göre sıralar. 
// console.log(points);
// points.reverse();
// console.log(points);




const students=[
    {name: 'can', point:40},
    {name: 'tuba', point:60},
    {name: 'ali', point:25},
    {name: 'serkan', point:100},
];

// students.sort((a,b)=>{
//     if(a.point>b.point)
//     {
//         return -1;
//     }
//     else if(a.point<b.point)
//     {
//         return 1;
//     }
//     else{
//         return 0;
//     }
// });

students.sort((a,b)=>b.point-a.point);
console.log(students);