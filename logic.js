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
    if (word.includes(letter) === true) {
        return true
    }
    else if (word.includes(letter) === false) {
        return false
    }
}

function getBlanks(word) {
    var blanks = [];
    for(i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            blanks[i] = " ";
        }
        else {
            blanks[i] = "_";
        }
    }
    return blanks
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

