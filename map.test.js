let sweetDash = require('sweet-dash');

let map = sweetDash.map;

const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];

function addHello(name){
 return "Hello" + name;
}
// let addHello = map(names,addHello);

test('filter finds all names with 3 letters', () => {
 expect(addHello).toEqual(["Hello Jon","Hello Bob","Hello Ted","Hello Barney","Hello Lilly","Hello Robin",
 "Hello Saul","Hello Axe"]);
});