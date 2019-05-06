var gameWords = ["Miguel Diaz", "Johnny Lawrence", "Hawk", "Daniel Larusso", "Samantha Larusso"];

function randomWord(x) {
    rand = math.random
    for (i = 1; i<gameWords.length; i++) {
        if (i / gameWords.length >= rand) {
            return gameWords[i - 1]
        }
    }
}