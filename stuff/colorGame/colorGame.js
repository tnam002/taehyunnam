var numSqaures = 6;
var colors = generateColors(numSqaures);
var pickedColor;
var h1 = document.querySelector('h1');
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('span');
var messageDisplay = document.querySelector('#message');
var resetButton = document.querySelector('#reset');
var hardButton = document.querySelector('#hardButton');
var easyButton = document.querySelector('#easyButton');

pickColor(); colorDisplay.textContent = pickedColor;

hardButton.addEventListener('click', function() {
    hardButton.classList.add('selected');
    easyButton.classList.remove('selected');
    easyButton.backgroundColor = 'white';
    resetButton.backgroundColor = 'royalblue';
    numSqaures = 6;
    colors = generateColors(numSqaures);
    pickColor(); colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; ++i) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';
    }
    h1.style.backgroundColor = '#232323';
});

easyButton.addEventListener('click', function() {
    hardButton.classList.remove('selected');
    hardButton.style.backgroundColor = 'white';
    easyButton.classList.add('selected');
    resetButton.style.backgroundColor = 'royalblue';
    numSqaures = 3;
    colors = generateColors(numSqaures);
    pickColor(); colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; ++i) {
        if (colors[i]) { squares[i].style.backgroundColor = colors[i]; }
        else { squares[i].style.display = 'none'; }
    }
    h1.style.backgroundColor = '#232323';

});

resetButton.addEventListener('click', function() {
    // generate new colors
    colors = generateColors(numSqaures);
    // pick new picked Color
    pickColor();
    // change color display
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (var i = 0; i < squares.length; ++i) {
        squares[i].style.backgroundColor = colors[i];
    }
    // change background of h1
    h1.style.backgroundColor = '#232323';
    // change textContent of button back to 'new colors'
    resetButton.textContent = 'New Colors';
    resetButton.style.backgroundColor = 'royalblue';
    if (numSqaures === 3) {
        easyButton.backgroundColor = 'royalblue';
    } else {
        easyButton.backgroundColor = 'royalblue';
    }
});

for (var i = 0; i < squares.length; ++i) {
    // initialize colors of squares
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct! :D';
            changeColors(clickedColor);
            resetButton.textContent = 'Play Again?';
        } else {
            messageDisplay.textContent = 'Try again. :(';
            this.style.backgroundColor = '#232323';
        };
    });
}

function changeColors(color) {
    for (var i = 0; i < squares.length; ++i) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
    resetButton.style.backgroundColor = color;
    if (numSqaures === 3) {
        easyButton.style.backgroundColor = color;
    } else {
        hardButton.style.backgroundColor = color;
    }
}

function pickColor() {
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
}

function generateColors(num) {
    var arr = [];
    for (var i = 0; i < num; ++i) {
        arr.push(generateColor());
    }
    return arr;
}

function generateColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    // rgb(0, 0, 0)
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
} 