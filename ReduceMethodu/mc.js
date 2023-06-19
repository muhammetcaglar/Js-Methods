const points=[70,75,25,35,10,80,27];

const result=points.reduce((value,point)=>{
    if(point>50)
    {
        value++;
    }
    return value;
},0);//value değerine 0 verdik.

console.log(result);

const elements=[
    {name:'ali',point:40},
    {name:'veli',point:60},
    {name:'serkan',point:30},
    {name:'ali',point:100},
    {name:'ayşe',point:80},
    {name:'çağlar',point:30},
    {name:'mete',point:60},
    {name:'veli',point:40},
];
const alitotal=elements.reduce((value,student)=>{
    if(student.name=='ali')
    {
        value+=student.point;
    }
    return value;
},0);

console.log(alitotal);