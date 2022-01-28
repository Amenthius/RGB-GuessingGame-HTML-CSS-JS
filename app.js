var number = [];

const randomBgColor = () => {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
  document.body.style.background = bgColor;
};

const getUserInput = () => {
let number=[];
// Store user input into variables.
  let targetRGB = document.body.style.background;
  var x = document.getElementById("R");
  number.push(document.getElementById("R").value);
  x.innerHTML = number.join("<br/>");
  var y = document.getElementById("G");
  number.push(document.getElementById("G").value);
  x.innerHTML = number.join("<br/>");
  var z = document.getElementById("B");
  number.push(document.getElementById("B").value);
  x.innerHTML = number.join("<br/>");
  
// Get RGB value from HTML body into a variable.
  var rgb = document.body.style.background;
  rgb = rgb
    .substring(4, rgb.length - 1)
    .replace(/ /g, "")
    .split(",");
  console.log(rgb);

  console.log(number);



// Calculate user number with rgb array to check score.
const redScore = (a,b) =>{
  if (a > b){
    return Math.abs(a - b);
    console.log(`${a} is bigger than ${b}`);
  } else{
    return Math.abs(b - a);
    console.log(`${b} is bigger than ${a}`);
  }
}

  function greenScore(a, b) {
    if (a > b) {
      console.log(`${a} is bigger than ${b}`);
      return a - b;
    } else {
      console.log(`${b} is bigger than ${a}`);
      return b - a;
    }
  }
  function blueScore(a, b) {
    if (a > b) {
      console.log(`${a} is bigger than ${b}`);
      return a - b;
    } else {
      console.log(`${b} is bigger than ${a}`);
      return b - a;
    }
  }

let score = (a,b,c) =>{
  return (a + b + c) / 3;
}

let redResult = redScore(rgb[0],number[0]);
let greenResult = greenScore(rgb[1],number[1]);
let blueResult = blueScore(rgb[2],number[2]);

console.log("Red Result: " + redResult);
console.log("Red Score: "+ redScore(rgb[0],number[0]));
console.log(greenResult);
console.log(blueResult);
console.log(Math.floor(score(redResult, greenResult, blueResult)));

number = [];
redResult = 0;
greenResult = 0;
blueResult = 0;

};
