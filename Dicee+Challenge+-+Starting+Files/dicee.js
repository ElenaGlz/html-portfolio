var player1 = Math.floor(Math.random()*6)+1;
var player2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", "./images/dice" + player1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + player2 + ".png");
if(player1>player2) {
    document.querySelector(".container h1").innerText = "Player 1 wins!";
    document.querySelector(".dice.player1 p").innerText = "🚩 Player 1";
}
else if(player2>player1) {
    document.querySelector(".container h1").innerText = "Player 2 wins!";
    document.querySelector(".dice.player2 p").innerText = "Player 2 🚩";
}
else {
    document.querySelector(".container h1").innerText = "It's a draw.";
}