// task 1----------->
const colors={
    red: '#ff0000',
    green: '#000ff00',
    blue: '#00000ff',
    "golden rod":'#daa520'
}
console.log(colors['golden rod']);


// -------------------------------------->
// ------------task 2--------------->
const car ={
    make : 'toyata',
    model :"corolla",
    year:2020
}
car["passenger capacity"]=5;
console.log(car);

// ---------------------------------------------------
// ------------task 3---------->
const student={
    Name:'Hamaim Sakip',
    id:54321,
    physics:{
        subject:'HSC',
        author:'Shahjan Tapon',
        marks:30
    }
}
console.log('physics marks is =', student.physics.marks);


// --------------------------------------------->
// -----------task 4-------------->
let students={
    name:'Arian Grade',
    age:21,
    city:'Gaibulhowa',
    isStudent: true,
};
const prop=Object.keys(students);
console.log('leangth =',prop.length);
// --------------------------------------------------
// ------task 5----------------->
let myObjects={
    name:'John Doe',
    age: 25,
    city: 'Example city',
    isStudent: true
}
for(const obj in myObjects){
    console.log('key :',obj,'|');
}





