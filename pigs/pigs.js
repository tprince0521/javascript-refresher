
let currentPlayer = 0
let pig1
let pig2
let score = 0
let player0Score
let player1Score
let player2Score
let player3Score

function handleClick(id) {
    console.log(id)

    if (id.includes("Pass")) {
        Pass()
    } else
        Roll()
}

function Pass() {
    console.log("player " + currentPlayer + " passed")
    ChangePlayer()
    currentPlayer++
    if (currentPlayer > 3) {
        currentPlayer = 0
    }
    console.log("player " + currentPlayer + " turn")
    revertColor()
}

function Roll() {
    console.log("player " + currentPlayer + " rolled")
    pig1 = pigRoll()
    pig2 = pigRoll()

    console.log(pig1)
    console.log(pig2)

    updatePigs()

  scorePigs()

    console.log(score)


}

function ChangePlayer() {
    console.log(currentPlayer)
    document.getElementById("player" + currentPlayer).classList.remove("w3-dark-gray")
    document.getElementById("player" + currentPlayer).classList.add("w3-light-gray")
    let playerDiv = document.getElementById("player" + currentPlayer)
    console.log(playerDiv)

}

function revertColor() {
    document.getElementById("player" + currentPlayer).classList.remove("w3-light-gray")
    document.getElementById("player" + currentPlayer).classList.add("w3-dark-gray")
}

function pigRoll() {
    let randomDigit = Math.random()
    console.log(randomDigit)
    if (randomDigit < 0.349) {
        return "dot"
    } else if (randomDigit < 0.651) {
        return "no dot"
    } else if (randomDigit < 0.875) {
        return "razorback"
    } else if (randomDigit < 0.963) {
        return "trotter"
    } else if (randomDigit < 0.993) {
        return "snouter"
    } else if (randomDigit < 1) {
        return "leaning jowler"
    }

}

function updatePigs() {

    document.getElementById("player" + currentPlayer + "Pig1").innerHTML = pig1
    document.getElementById("player" + currentPlayer + "Pig2").innerHTML = pig2

}

function scorePigs() {
    if (pig1 == "dot" && pig2 == "dot") {
        score = score + 1
    } else if (pig1 == "no dot" && pig2 == "no dot") {
        score = score + 1
    } else if (pig1 == "dot" || "no dot" && pig2 == "trotter" || "razorback") {
        score = score + 5
    } else if (pig2 == "dot" || "no dot" && pig1 == "trotter" || "razorback") {
        score = score + 1000000
    } else if ((pig1 == "razorback" && pig2 == "razorback") || (pig2 == "trotter" && pig1 == "trotter")) {
        score = score + 20
    } else if ((pig1 == "razorback" && pig2 == "trotter") || (pig2 == "razorback" && pig1 == "trotter")) {
        score = score + 10
    }

    document.getElementById("player" + currentPlayer + "HandScore").innerHTML = "Score:" + score

    if (pig1 == "no dot" && pig2 == "dot" || pig2 == "no dot" && pig1 == "dot") {
        document.getElementById("player" + currentPlayer + "HandScore").innerHTML = "Pig out!"
        score = 0
        Pass()
    }

}