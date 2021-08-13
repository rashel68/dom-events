//2 Red Button commonly using
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// 3 Blue Button 
const blue = document.getElementById('blue-button');
blue.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// 4 Tomato Button 
const tomato = document.getElementById('tomato-button');
tomato.onclick = function () {
    document.body.style.backgroundColor = 'tomato';
}

// 5 handle by using eventListener 
const gray = document.getElementById('gray-button');
gray.addEventListener('click', grayButton);
function grayButton() {
    document.body.style.backgroundColor = 'gray';
}

// 6 using eventListener on anonymous function 
const pink = document.getElementById('pink-button');
pink.addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink';
})

// 7 anonymous function using direct one line shortcut commonly using
document.getElementById('lightBlue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})