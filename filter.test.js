let sweetDash = require('sweet-dash');

let filter = sweetDash.filter;

const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];
function onlyThreeLetters(name){
 return name.length === 3;
}
let helloArray = filter(names,onlyThreeLetters);

test('filter finds all names with 3 letters', () => {
 expect(helloArray).toEqual(["Jon","Bob","Ted","Axe"]);
});

//an array can never be strictly equal to another array, use .toEqual not .toBe
//variables can point to the same array however