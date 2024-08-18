var randonNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "./images/dice"+randonNumber1+".png";
document.querySelector(".dice1").setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "./images/dice"+ randomNumber2 +".png";
document.querySelector(".dice2").setAttribute("src" , randomImage2);

if(randomImage1>randomNumber2){
    document.querySelector(".winner p").textContent ="winner is player 1";
}
else{
    document.querySelector("winner p").textContent="winner is player 2";
}