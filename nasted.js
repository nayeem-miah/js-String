const collage={
    name:'vnc',
    class:['11', '12'],
    events:['book fair ', '21 feb'],
    unique:{
        color : 'blur',
        result:{
            gpa:5,
            merit:'top'
        }
    }
}
console.log(collage.unique); //output  objects
console.log(collage.unique.color);
console.log(collage.unique.result.merit);
collage.unique.result.merit='top top most';
console.log(collage.unique.result.merit);
collage.events[1]='16 dec';
console.log(collage.events[1]);
console.log(collage);
delete collage.class;
