const header = document.querySelector(".container > h1"),
    dices = document.querySelectorAll(".container .dice img");

var choices = []

dices.forEach(dice => {

  var dice_random_num = Math.floor(Math.random() * 6) +1;
  choices.push(dice_random_num)
  dice.src = `images/dice${dice_random_num}.png`;
})

if (choices[0] === choices[1]) {
  header.innerText = "Draw!"
}
else {
  header.innerText = `🚩Play ${choices.indexOf(Math.max(...choices)) +1} Wins!`
}