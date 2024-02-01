const person ={
    name: 'sundor uddin',
    age: 25,
    profession:'devoloper',
    salary:25000,
    marred: true,
    'fav place ':['banderban', 'cox-bazar', 'kuwahatha']//fav place is not allow ;
}
person.salary=30000;
person['age']=26;
person['fav place ']=['maldip', 'sagaj', 'dubai']  //dot(.) notation is not allow
console.log(person);

const work ='profession';
console.log(person[work]);
const popwork='profession';
person[popwork]='programmer';
console.log(person);