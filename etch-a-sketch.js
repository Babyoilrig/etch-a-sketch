console.log('It works!');

//Plan
//Select elements on the page - canvas, shake button

//Selecting the canvas and console logging it 
const canvas = document.querySelector('#etch-a-sketch');
// console.log(canvas);
//Selecting the content - i.e. the drawing element
const ctx = canvas.getContext('2d');

//Selecting the shake button
//Select elements on the page - canvas, shake button
const shakebutton = document.querySelector('.shake');
console.log(shakebutton);

//Set up our canvas for drawing
//Setting defaults on the canvas - to make sure lines are rounded
ctx.lineJoin = 'round';
ctx.lineCap = 'round';


//Write a draw function 

//Write a handler for the keys

//Clear or shake function 

//Listen for arrow keys
