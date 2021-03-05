  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

let unicornImages = document.getElementsByClassName('inflate-an-image')
let unicornCounts = {
  unicorn1: 0,
  unicorn2: 0,
  unicorn3: 0
}
// console.log(unicornImages)

for (var i = 0; i < unicornImages.length; i ++){
  console.log(unicornImages[i])
  unicornImages[i].addEventListener("click", unicornFunc);
}



function unicornFunc(){

  var images = document.getElementsByClassName('inflate-an-image');

  if(this.id === "unicorn1"){
    if (unicornCounts[this.id] <= 2){
        unicornCounts[this.id] += 1;
        this.src = createImgSrc (unicornCounts[this.id])
    }
    else {window.alert("Unicorn number 1 says thanks you!")}
    
  }
  if(this.id === "unicorn2"){
    if (unicornCounts[this.id] <= 2){
      unicornCounts[this.id] += 1;
      this.src = createImgSrc (unicornCounts[this.id])
  }
  else {window.alert("Unicorn number 2 says thanks you!")}
  }
  if(this.id === "unicorn3"){
    if (unicornCounts[this.id] <= 2){
      unicornCounts[this.id] += 1;
      this.src = createImgSrc (unicornCounts[this.id])
  }
  else {window.alert("Unicorn number 3 says thanks you!")}
  }

  console.log(unicornCounts)



  // for(var j = 0; j < images.length; j ++){
  //   console.log(images[j].src)
  //   images[j].src = "images/unicorn-3.png";
  // }
  

}

function createImgSrc (unicornNum){
  return "images/unicorn-"+ unicornNum + ".png"
}