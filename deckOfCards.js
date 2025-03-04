let i = 0;

for (let i = 1; i < 57; i++) {

    if (i < 11) {
        console.log(i + " of Hearts")
    }
    else if (i == 11) {
        console.log("Jack of Hearts")
    }
    else if (i == 12) {
        console.log("Queen of Hearts")
    }
    else if (i == 13) {
        console.log("King of Hearts")
    }
    else if (i == 14) {
        console.log("Ace of Hearts")
    }

    else if (i > 14 && i < 25) {
        console.log(i - 14 + " of Spades")
    }
    else if (i == 25) {
        console.log("Jack of Spades")
    }
    else if (i == 26) {
        console.log("Queen of Spades")
    }
    else if (i == 27) {
        console.log("King of Spades")
    }
    else if (i == 28) {
        console.log("Ace of Spades")
    }

    else if (i > 28 && i < 39) {
        console.log(i - 28 + " of Diamonds")
    }
    else if (i == 39) {
        console.log("Jack of Diamonds")
    }
    else if (i == 40) {
        console.log("Queen of Diamonds")
    }
    else if (i == 41) {
        console.log("King of Diamonds")
    }
    else if (i == 42) {
        console.log("Ace of Diamonds")
    }

    else if (i > 42 && i < 53) {
        console.log(i - 42 + " of Clubs")
    }
    else if (i == 53) {
        console.log("Jack of Clubs")
    }
    else if (i == 54) {
        console.log("Queen of Clubs")
    }
    else if (i == 55) {
        console.log("King of Clubs")
    }
    else if (i == 56) {
        console.log("Ace of Clubs")
    }
}