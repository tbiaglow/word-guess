var gameWords = ["Miguel Diaz", "Johnny Lawrence", "Hawk", "Daniel Larusso", "Samantha Larusso"];

function randomWord(gameWords) {
    var rand = Math.random();
    for (i = 1; i<=gameWords.length; i++) {
        if (i / gameWords.length >= rand) {
            return gameWords[i - 1]
        }
    }
}

function isCorrectGuess(word, letter) {
    if (word.includes(letter.toLowerCase()) === true || word.includes(letter.toUpperCase()) === true) {
        return true
    }
    else {
        return false
    }
}

function getBlanks(word) {
    var currentArray = [];
    for(i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            currentArray[i] = " ";
        }
        else {
            currentArray[i] = "_";
        }
    }
    return currentArray
}

function fillBlanks(word, currentArray, letter) {
    for (i = 0; i < word.length; i++) {
        if (letter.toLowerCase() === word[i]) {
            currentArray[i] = word[i];
        }
        else if (letter.toUpperCase() === word[i]) {
            currentArray[i] = word[i]
        }
    } 
    return currentArray   
}

function setupRound(word) {
    var round = {
        word: word,
        guessesLeft: 9,
        wrongGuesses: [],
        puzzleState: getBlanks(word)
    }
    return round
}

function updateRound(round, letter) {
    var round = {
        word: round.word,
        guessesLeft: round.guessesLeft,
        wrongGuesses: round.wrongGuesses,
        puzzleState: fillBlanks(round.word, round.puzzleState, letter)
    }
    if (isCorrectGuess(round.word, letter) === false && round.wrongGuesses.includes(letter.toLowerCase()) === false && round.wrongGuesses.includes(letter.toUpperCase()) === false) {
        round.wrongGuesses.push(letter);
        round.guessesLeft -= 1;
    }
    return round
}

function hasWon(puzzleState) {
    for (i = 0; i < puzzleState.length; i++) {
        if (puzzleState[i] === "_") {
            return false
        }
    }
    return true
}

function hasLost(guessesLeft) {
    if (guessesLeft === 0) {
        return true
    }
    else {
        return false
    }
}

function isEndOfRound(round) {
    if (hasLost(round.guessesLeft) === true || hasWon(round.puzzleState) === true) {
        return true
    }
    else {
        return false
    }
}

var wins;
var losses;

function setupGame(words, wins, losses) {
    var game = {
        words: gameWords,
        wins: wins,
        losses: losses,
        round: setupRound(randomWord(gameWords))
    }
    return game
}

function startNewRound(game) {
    if (hasWon(puzzleState) === true) {
        game.wins += 1;
        alert("You win!")
    }
    else if (hasLost(puzzleState) === true) {
        game.losses += 1;
        alert("The word was " + setupRound.word)
    }
}