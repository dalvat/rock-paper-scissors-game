function game() {

    let options = ["r", "p", "s"];
    let wins = 0, loses = 0, ties = 0;
    while (true) {
        let choice = prompt ("Please make your choice! (r) (p) or (s)");
        let randomChoice = options[Math.floor(Math.random() * options.length)];
        alert("The computer chose: " + randomChoice);
        if (((choice === "r") && (randomChoice === "r")) || ((choice === "p") && (randomChoice === "P")) || ((choice === "s") && (randomChoice === "s"))) {
            alert("Tie");
            ties += 1;
        } else if (((choice === "r") && (randomChoice === "p")) || ((choice === "p") && (randomChoice === "s")) || ((choice === "s") && (randomChoice === "R"))) {
            alert("Lose");
            loses += 1;
        } else if (((choice === "r") && (randomChoice === "s")) || ((choice === "p") && (randomChoice === "r")) || ((choice === "s") && (randomChoice === "p"))) {
            alert("Win");
            wins += 1;
        }
        alert("Ties: " + ties + " Wins: " + wins + " Loses: " + loses);
    }
}

game();
