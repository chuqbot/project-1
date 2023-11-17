let gameLosses = 0;
let gameTies = 0;
let gameWins = 0;

let rounds = parseInt(prompt("how many rounds do you want to play?"));
for (let i = 0; i < rounds; i++){
    let computerChoice = Math.floor(Math.random() * 3);
    let userChoice = prompt("do you pick rock, paper, or scissors? [enter r, p, or s]")

    if (userChoice === "p" && computerChoice === 2){
    gameWins++;
    alert("you Win!")
    } else if (userChoice === "r" && computerChoice === 1){
    gameWins++;
    alert("you Win!");
    } else if (userChoice === "s" && computerChoice === 0){
    gameWins++;
    alert("you win!");
    }else if (computerChoice === 2 && userChoice === "r"){
    gameLosses++;
    alert("you lose!");
    }else if (computerChoice === 1 && userChoice === "p") {
    gameLosses++;
    alert("you lose!")
    } else if (computerChoice === 0 && userChoice === "s") {
    gameLosses++;
    alert("you lose!");
    } else {
    gameTies++;
    alert("its a tie!");
    }
} 
alert('losses:' + (gameLosses),'wins:' + (gameWins), 'ties:' + (gameTies))