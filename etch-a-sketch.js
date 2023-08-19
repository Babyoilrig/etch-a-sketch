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
//Finding height and width of canvas
const width = canvas.width;
const height = canvas.height;

//Creating random x and y coordinate for our starting point
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * width);


console.log(`Canvas width is ${width}, canvas height is ${height}`);
//Setting defaults on the canvas - to make sure lines are rounded
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

//Start the drawing - put the marker on the page
ctx.beginPath();
//Making the line on the page
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();







//Write a draw function 

//Write a handler for the keys

//Clear or shake function 

//Listen for arrow keys
