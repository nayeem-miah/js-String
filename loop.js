const mobile={
    brand:'samsung',
    price:25000,
    camera:'12mp',
    isNew:true,
}
// object a for  in use hoi 
// array a for of use hoi
console.log(mobile);
for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}


const key=Object.keys(mobile);
console.log(key);
for(const pop of key){
    console.log(pop, ":", mobile[pop]);
}

const x='';
if(!x.length){
    console.log('fg');
}
else{
    console.log('kkk');
}


