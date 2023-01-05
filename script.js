function game() {

    let options = ["R", "P", "S"];
    let wins = 0, loses = 0, ties = 0;
    while (true) {
        if (i === 10) {
            break;
        }
        let choice = prompt ("Please make your choice");
        let randomChoice = options[Math.floor(Math.random() * options.length)];
        alert("The computer chose: " + randomChoice);
        if (((choice === "R") && (randomChoice === "R")) || ((choice === "P") && (randomChoice === "P")) || ((choice === "S") && (randomChoice === "S"))) {
            alert("Tie");
            ties += 1;
        } else if (((choice === "R") && (randomChoice === "P")) || ((choice === "P") && (randomChoice === "S")) || ((choice === "S") && (randomChoice === "R"))) {
            alert("Lose");
            loses += 1;
        } else if (((choice === "R") && (randomChoice === "S")) || ((choice === "P") && (randomChoice === "R")) || ((choice === "S") && (randomChoice === "P"))) {
            alert("Win");
            wins += 1;
        }
        alert("Ties: " + ties + " Wins: " + wins + " Loses: " + loses);
    }
}

game();
