/*1st image of dice*/
var output1 = Math.floor(Math.random()*6+1);
var RandomImg= "images/dice"+output1+".png";
document.querySelectorAll("img")[0].setAttribute("src",RandomImg);

/*2nd image of dice*/
var output2 = Math.floor(Math.random()*6+1);
var RandomImg2= "images/dice"+output2+".png";
document.querySelectorAll("img")[1].setAttribute("src",RandomImg2);

if (output1 > output2) {
  document.querySelector("h1").innerHTML="Player 1 won";

} else if(output1 < output2) {
document.querySelector("h1").innerHTML="Player 2 won";
}
else
{document.querySelector("h1").innerHTML="Tie between players";}
