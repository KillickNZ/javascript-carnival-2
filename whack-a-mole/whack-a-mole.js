  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

/* 

- The ability to store or get references to the cells in the HTML table.
  - DOM retrieval, create a get cell func

- A function to randomly select which cell should show the mole.
  Need a random func that returns a number between 0 <= 5

- A way to show a mole in the chosen cell. 
  create a func to change display

*/

// initialize game

// coords is a two cell array that hold [ row, col ] data
var coords = []
var rowsGlobal = document.getElementsByTagName('TR')
moveMole()


// Add event listeners to board
for (var i = 0; i < rowsGlobal.length; i++){
  for (var ii = 0; ii < rowsGlobal[i].cells.length; ii++){
    var idStr = i + " " + ii;
    
    rowsGlobal[i].cells[ii].setAttribute('id', idStr)
    rowsGlobal[i].cells[ii].addEventListener('click', whack)
  }
}


function whack(e){
  e = e || window.event;

  var targetId = e.target.getAttribute('id').toString();
  var coordsStr = coords.join(" ")

  if(coordsStr !== targetId){
    return
  }

  removeMole()  
  moveMole()  
}

function removeMole(){
  var row = coords['0'];
  var col = coords[1];

  var rowsToFindMole = document.getElementsByTagName('TR');
  var cellToRemoveMole = rowsToFindMole[coords[0]].cells[coords[1]];

  cellToRemoveMole.style.background = 'BurlyWood';
}

// get a cell within table to move the mole and returns coords of the new location
function moveMole(){
  // get random int within range of table size.
  var randomRow = random();
  var randomCol = random();
  newCoords = [randomRow, randomCol];

  // get a cell using the random ints.
  var rows = document.getElementsByTagName('TR');
  var cell = rows[randomRow].cells[randomCol];

  // Add data to cell
  cell.style.background = 'BurlyWood url("/whack-a-mole/mole.PNG") center';
  cell.style.backgroundSize = '75px';

  coords = newCoords.slice()
  return;
}


// returns a random number between 0 < 6
function random(){
  return Math.floor(Math.random() * (4 - 0 + 1) + 0)
}
