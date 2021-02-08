// const choices = ["potato", "paper", "knife"];
// console.log(choices);

// const bot = () => {
//     const choices = ["potato", "paper", "knife"];
//     bot = (Math.floor(Math.random() * choices.length)).innerHTML ;

//   }
// bot();

// const potato = document.querySelector(".potato");
// const toilet = document.querySelector(".toilet");
// const knife = document.querySelector(".knife");

// potato.addEventListener('click', function(){
//     console.log("potato");
// })
// toilet.addEventListener('click', function(){
//     console.log("paper");
// })
// knife.addEventListener('click', function(){
//     console.log("knife");
// })

const returnWinner = (player, bot) => {
  console.log(bot);
  let result = "";
  if (player === bot) {
    result = "It's a draw...replay dude.";
  } else if (
    (player === "🥔" && bot === "🔪") ||
    (player === "🔪" && bot === "🧻") ||
    (player === "🧻" && bot === "🥔")
  ) {
    result = "You won dude!";
  } else {
    result = "Dude ! You lost, you sick fuck !!";
  }
  displayResult(result, bot, player);
  console.log(result);
};

const displayResult = (result, bot, player) => {
  document.querySelector(
    ".result"
  ).innerHTML = `Player: ${player} VS Bot: ${bot} <br> ${result}`;
};

const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const player = buttons[i].innerHTML;
    console.log(player);
    const bot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    returnWinner(player, bot);
  });
}
