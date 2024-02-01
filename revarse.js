const  sentence ='I am learing web dev.';
// result == .ved bew gnirael ma I;

// web
// >>bew

let revarse =' ';
for(const letter of sentence){
    // console.log(letter);
    revarse= letter+revarse;
}
console.log(revarse);


// ignore this soluation>>>>>>>>
let rev=' ';
for(let i=  0; i<sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter=sentence[i];
    rev =letter+rev;


}
console.log(rev);

// shortcut reverse
const reversed=sentence.split('').reverse().join('');
console.log(reversed);