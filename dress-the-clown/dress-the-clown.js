  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

// ================= Global variables ================= //

var headIndex = 0;
var bodyIndex = 0;
var shoeIndex = 0;

var clothingIndex = 0;
var clothingStr;
var indexStr;


document.addEventListener('keydown', controlCenter)

// ================= Change Image SRC functions ================= //

function changeClownHead(){
  var newSrc  = 'images/head' + headIndex + ".png";
  var head    = document.getElementsByClassName('head');
  head[0].src = newSrc;
}

function changeClownBody(){
  var newSrc  = 'images/body'+bodyIndex+".png";
  var body    = document.getElementsByClassName('body');
  body[0].src = newSrc
}

function changeClownShoes(){
  var newSrc  = 'images/shoes'+shoeIndex+".png";
  var shoes   = document.getElementsByClassName('shoes');
  shoes[0].src = newSrc
}


function controlCenter(e){

  setGlobalStrings() 
  // ================= Key Strokes ================= //

  // right key
  if(e.keyCode === 39){
    indexFunc(indexStr, 'incrementUp')
    window['changeClown' + clothingStr]()
    return
  }
  // left key
  if(e.keyCode === 37){
    indexFunc(indexStr, 'incrementDown')
    window['changeClown' + clothingStr]()
    return
  }

  // up key
  if(e.keyCode === 38){
    if(clothingIndex >= 2){
      clothingIndex = 0;
    }
    else {clothingIndex++}
    return
  }
  // down key
  if(e.keyCode === 40){
    if(clothingIndex <= 0){
      clothingIndex = 2;
    }
    else {clothingIndex --}
    return
  }

}

// ================================= //

function indexFunc(index, direction){

  if(direction == 'incrementUp'){
    if(window[index] >= 5){
      window[index] = 0;
    }
    else {
      window[index] ++}
  }

  if(direction == 'incrementDown'){
    if(window[index] <= 0){
      window[index] = 5;
    }
    else {window[index] --}
  }
}

// set the global variables used for incrementing index's and dynamically accessing the changeClown functions.
function setGlobalStrings () {
  if(window['clothingIndex'] == 0){
    indexStr = "headIndex";
    clothingStr = "Head"
  }
  if(clothingIndex === 1){
    indexStr = "bodyIndex"
    clothingStr = "Body"
  }
  if(clothingIndex === 2){
    indexStr = "shoeIndex"
    clothingStr = "Shoes"
  }
}