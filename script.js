var css = document.querySelector("h3");
var color1 = document.getElementsByClassName("color1")[0];
var color2 = document.getElementsByClassName("color2")[0];
var body = document.getElementById("Gradient")
var text =document.querySelector("p")
var color = document.getElementById("ColorButton");

//body.style.background="linear-gradient(to right,dcolor1,dcolor2)"

css.textContent = body.style.background;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var dcolor1 = '#';
  var dcolor2 = '#';
  for (var i = 0; i < 6; i++) {
    dcolor1 += letters[Math.floor(Math.random() * 16)];
    dcolor2 += letters[Math.floor(Math.random() * 16)];
  }
  return [dcolor1,dcolor2];
}


color3=getRandomColor()
dcolor1 = color3[0]
dcolor2 = color3[1]
console.log(dcolor1,dcolor2)
dcolor1 = color3[0]
dcolor2 = color3[1]

body.style.background = 
   "linear-gradient(to right," 
   + dcolor1
   + ","
   + dcolor2
   + ")";

css.textContent = body.style.background;


//color4 = getRandomColor()

//dcolor1 = color4[0]
//dcolor2 = color4[1]
function setGradient()
{

 
	body.style.background = 
   "linear-gradient(to right," 
   + color1.value
   + ","
   + color2.value
   + ")";
   
   css.textContent = body.style.background;
     
   console.log(dcolor1.value)
   console.log(dcolor2.value)
}

function defaultGradient()
{

  color4 = getRandomColor()

  dcolor1 = getRandomColor()[0]
  dcolor2 = getRandomColor()[1]
  body.style.background = 
   "linear-gradient(to right," 
   + dcolor1
   + ","
   + dcolor2
   + ")";
   
   css.textContent = body.style.background;
     
   console.log(dcolor1.value)
   console.log(dcolor2.value)
}




color.addEventListener("click",defaultGradient)

color1.addEventListener("input",setGradient)

color2.addEventListener("input",setGradient)