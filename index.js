var randomNumber1 = Math.floor((Math.random() * 6 ) + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSorce = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSorce);


var randomNumber2 = Math.floor((Math.random() * 6 ) + 1);

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomImageSorce = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSorce);


if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText="🚩Player 1 WINS!"    
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerText="Player 2 WINS!🚩"
} else {
    document.querySelector("h1").innerText="DRAW!"
}