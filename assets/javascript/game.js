var lettersGuessed = [];
var guessesLeft = 10;
var wins = 0; 
var losses = 0;

var computerGuess =
    String.fromCharCode(
        Math.round(Math.random() * 26) + 97
    );

console.log(computerGuess);
document.onkeydown = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();

    addLetter(keyPress);

}

function addLetter (usersKeypress) {

    var repeatGuess = lettersGuessed.some(function(item){
        return item === usersKeypress;
    })

    if (repeatGuess) {
        alert(usersKeypress + " already guessed. Try again!");

    } else {
        lettersGuessed.push(usersKeypress);
        console.log(lettersGuessed);
        showLettersGuessed();
        guessMatch(usersKeypress);
    }

}

function showLettersGuessed() {
    var tempStr = lettersGuessed.join(", ");
    document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch (character) {

    console.log(character);
    console.log(computerGuess);

    if (character === computerGuess) {
        wins = wins + 1;
        showWins();
        resetVariables();

    } else if (guessesLeft === 0) {
        losses = losses + 1; 
        showLosses();
        resetVariables();

    } else {
        guessesLeft = guessesLeft - 1;
        showGuessesRemaining();
    }
}

function showWins() {
    document.getElementById("numWins").innerHTML = wins;
}

function showGuessesRemaining() {
    document.getElementById("numGuesses").innerHTML = guessesLeft;
} 

function showLosses() {
    document.getElementById("numLosses").innerHTML = losses;
}


function resetVariables () {
    lettersGuessed = [];
    guessesLeft = 10;
}

function startGame() {
    showGuessesRemaining();
    showWins();
}


startGame();
