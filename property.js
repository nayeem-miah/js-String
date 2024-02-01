const person ={
    name: 'sundor uddin',
    age: 25,
    profession:'devoloper',
    salary:25000,
    marred: true,
    'fav place ':['banderban', 'cox-bazar', 'kuwahatha']//fav place is not allow ;
}
// console.log(person);

// dot(.) notatoion------>dot symble deya object er property access kora;
const income=person.salary;
console.log(income);
console.log(person.name);


// bracket Notation----------->
// third>>[] bracket deya value access kora;
console.log(person['age']);
console.log(person['marred']);
const boyos = person['age'];
console.log("person age =",boyos);

// error so you used [];
// console.log(person."fav place ");
console.log(person["fav place "]);
