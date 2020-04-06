// Select form
var size = document.getElementById('sizePicker');
var canvas = document.getElementById('pixelCanvas');

// Single cell to start with
canvas.insertRow().insertCell().id = 'cell1-1';

// Select initial color input
var cPicker = document.querySelectorAll('input#colorPicker');
var color = cPicker[0].value;

// Select initial size input
var rows = document.querySelector('input#inputHeight').value;
var columns = document.querySelector('input#inputWidth').value;

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
// Prevent 'submit' from refreshing the page
	event.preventDefault();
// get rid of the current grid
	canvas.innerHTML = "";
// and make a new one of the selected size
	rows = document.querySelector('input#inputHeight').value;
	columns = document.querySelector('input#inputWidth').value;
	for (i=1; i <= rows; i++) {
		var newRow = canvas.insertRow();
		for (j=1; j <= columns; j++) {
			var cell = newRow.insertCell();
			cell.id = 'cell' + i + '-' + j
		}
	}
}

// When the user clicks a cell, it changes to the active color
function cellPick(event) {
    event.toElement.bgColor = color;
}

// User selects a color
function colorPick(event) {
	cPicker = document.querySelectorAll('input#colorPicker');
	color = cPicker[0].value;
}

// all the event listeners
size.addEventListener('submit', makeGrid);
canvas.addEventListener('click', cellPick);
cPicker[0].addEventListener('input', colorPick);
