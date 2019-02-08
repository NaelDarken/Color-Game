
// generate a random color
const randColor = () => {

    let rHex = Math.floor( Math.random() * 256 );
    let gHex = Math.floor( Math.random() * 256 );
    let bHex = Math.floor( Math.random() * 256 );
    return `rgb(${rHex}, ${gHex}, ${bHex})`;

};

// make colors array
const generateColor = colorsNum => {

    let arr = [];
    for( let i = 0; i < colorsNum; i++ ) {

        arr.push( randColor() );

    }

    return arr;

};

// colors array generator
let gameMode = 6;
let colors = generateColor( gameMode );

// pick the correct color
const pickColor = () => {

    let randNum = Math.floor( Math.random() * colors.length );
    return colors[ randNum ];

};

let pickedColor = pickColor();
// display the correct color to choose
let displayColor = document.getElementById( 'correct-color' );
displayColor.textContent = pickedColor;

// control the mode game
const modeBtns = document.querySelectorAll( '.mode' );
for( let i = 0; i < modeBtns.length; i++ ) {

    modeBtns[i].addEventListener( 'click', () => {

        // toggle buttons
        modeBtns[0].classList.remove( 'selected' );
        modeBtns[1].classList.remove( 'selected' );
        modeBtns[0].removeAttribute( 'disabled', 'disabled' );
        modeBtns[1].removeAttribute( 'disabled', 'disabled' );
        modeBtns[i].classList.add( 'selected' );
        modeBtns[i].setAttribute( 'disabled', 'disabled' );

        // choose the diffculty
        modeBtns[i].textContent === 'Easy' ? gameMode = 3 : gameMode = 6;

        // reset the game
        reset();
        
    } );

}

// boxes colors content
const boxes = document.querySelectorAll( '.box' );
const banner = document.querySelector( '#banner' );
const newBtn = document.querySelector( '#new-game' );

// change all boxes to the correct color
const correctColor = color => {

    // loop through the colors list
    boxes.forEach( box => {

        // display color
        box.style.backgroundColor = color;

    } );
    // change the banner background color
    banner.style.backgroundColor = color;

};

// message to player
const message = document.getElementById( 'message' );

for( let i = 0; i < boxes.length; i++ ) {

    // add colors to our boxes
    boxes[i].style.backgroundColor = colors[i];

    // add listeners to our boxes
    boxes[i].addEventListener( 'click', function() {

        // grap the box color
        let clickedColor = this.style.backgroundColor;

        // compare clicked color to displyed color
        if ( pickedColor === clickedColor ) { // if he choosed the correct color

            correctColor( pickedColor );
            message.textContent = "Correct!";
            newBtn.textContent = "Play again?!";

        } else { // if he choosed the wrong color

            // picked a wrong color
            this.style.backgroundColor = "#232323";
            message.textContent = "Wrong!! Try a diffrent color.";

        }

    } );

}

// control the game

const reset = () => {

    // reset button
    newBtn.textContent = "New game";

    // reset colors
    colors = generateColor( gameMode );
    for( let i = 0; i < boxes.length; i++ ) {

        // number of boxes
        if ( colors[i] ) {

            boxes[i].style.backgroundColor = colors[i];
            boxes[i].style.display = "block";

        } else {

            boxes[i].style.display = "none";

        }

    }

    // reset picked color
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;

    // reset banner background color
    banner.style.backgroundColor = "#232323";
    message.textContent = "Choose Color!";

};

newBtn.addEventListener( 'click', () => {

    reset();

} );
