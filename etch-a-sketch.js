// console.log('It works!');

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
// console.log(shakebutton);
//Adding move amount - in caps and underscores as it is a true constant
const MOVE_AMOUNT = 10;

//Set up our canvas for drawing
//Finding height and width of canvas
const width = canvas.width;
const height = canvas.height;

//Creating random x and y coordinate for our starting point
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);


// console.log(`Canvas width is ${width}, canvas height is ${height}`);

//Setting defaults on the canvas - to make sure lines are rounded
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

//Creating the colour
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

//Start the drawing - put the marker on the page
ctx.beginPath();
//Making the line on the page
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();



//Write a draw function 
//Here passing the object - key to the function using destructuring
function draw({key}) {
    //Increment the hue
    hue = hue + 1;
    //Here explicitly updating the stroke style
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(key);
    //Start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    //Move our x and y values depending on what the user did
    //Switch statement as have multiple scenarios
    switch (key) {
//default case - this is needed for switch statement
        default:
            break;
//case for ArrowUp
        case 'ArrowUp':
            y = y - MOVE_AMOUNT;
            break;
//case for ArrowDown
        case 'ArrowDown':
            y = y + MOVE_AMOUNT;
            break;
//case for ArrowRight
        case 'ArrowRight':
            x = x + MOVE_AMOUNT;
            break;
//case for ArrowLeft
        case 'ArrowLeft':
            x = x - MOVE_AMOUNT;
            break;


    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

//Write a handler for the keys
function handleKey(e) {
    //Adding if statement to check if it is an arrow key
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        //Call the draw function with object called e.key
        draw({ key: e.key });
    //     console.log(e.key);
    //    console.log('HANDLING KEY'); 

    }
    
}

//Clear or shake function 

//Listen for arrow keys
window.addEventListener('keydown', handleKey);