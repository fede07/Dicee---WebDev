var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

document.getElementsByClassName("img1")[0].setAttribute("src", randomDiceImage1);
document.getElementsByClassName("img2")[0].setAttribute("src", randomDiceImage2);

var winner = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  winner.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  winner.innerHTML = "Player 2 Wins! 🚩";
} else {
    winner.innerHTML = "Draw!";
}
