const header = document.querySelector(".container > h1"),
    dicee = document.querySelectorAll(".container .dice img");

var selections = []

dicee.forEach(dice => {

  var dice_random_num = Math.floor(Math.random() * 6) +1;
  selections.push(dice_random_num)
  dice.src = `images/dice${dice_random_num}.png`;
})

if (selections[0] === selections[1]) {
  header.innerText = "Draw!"
}
else {
  header.innerText = `🚩 Play ${selections.indexOf(Math.max(...selections)) +1} Wins!`
}