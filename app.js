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

  number = [];

// Calculate user number with rgb array to check score.


};
