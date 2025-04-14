
let currentPlayer = 0
let pig1
let pig2
let score = 0
let playerScores = [0, 0, 0, 0]
let winningScore = 100

disable()

function handleClick(id) {
    console.log(id)


    if (id.includes("Pass")) {
        Pass()
    } else if (id.includes("Roll")) {
        Roll()
    } else
        location.reload(true)
}

function Pass() {
    console.log("player " + currentPlayer + " passed")
    console.log(score)

    playerScores[currentPlayer] += score
    document.getElementById("player" + currentPlayer + "TotalScore").innerHTML = "Total Score:" + playerScores[currentPlayer]
    score = 0

    document.getElementById("player" + currentPlayer + "HandScore").innerHTML = "Score: 0"
    ChangePlayer()
    currentPlayer++
    if (currentPlayer > 3) {
        currentPlayer = 0
    }
    console.log("player " + currentPlayer + " turn")
    revertColor()

    disable()

}

function pigOut() {

    score = 0
    document.getElementById("player" + currentPlayer + "HandScore").innerHTML = "Pig Out"
    ChangePlayer()
    currentPlayer++
    if (currentPlayer > 3) {
        currentPlayer = 0
    }

    console.log("player " + currentPlayer + " turn")
    revertColor()
    disable()
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

    checkWinner()

    disable()
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
    } else if ((pig1 == "razorback" && pig2 == "razorback") || (pig2 == "trotter" && pig1 == "trotter")) {
        score = score + 20
    } else if ((pig1 == "razorback" && pig2 == "trotter") || (pig2 == "razorback" && pig1 == "trotter")) {
        score = score + 10
    } else if (pig1 == "dot" || "no dot" && pig2 == "trotter" || "razorback") {
        score = score + 5
    } else if (pig2 == "dot" || "no dot" && pig1 == "trotter" || "razorback") {
        score = score + 5
    } else if (pig1 == "snouter" && pig2 == ("trotter" || "razorback")) {
        score = score + 15
    } else if (pig2 == "snouter" && pig1 == ("trotter" || "razorback")) {
        score = score + 15
    } else if (pig1 == "snouter" && pig2 == ("dot" || "no dot")) {
        score = score + 10
    } else if (pig2 == "snouter" && pig1 == ("dot" || "no dot")) {
        score = score + 10
    }else if (pig1 == "leaning jowler" && pig2 == ("trotter" || "razorback")) {
        score = score + 20
    } else if (pig2 == "leaning jowler" && pig1 == ("trotter" || "razorback")) {
        score = score + 20
    } else if (pig1 == "snouter" && pig2 == ("leaning jowler")) {
        score = score + 25
    } else if (pig2 == "snouter" && pig1 == ("leaning jowler")) {
        score = score + 25
    } else if (pig1 == "snouter" && pig2 == ("snouter")) {
        score = score + 40
    } else if (pig2 == "snouter" && pig1 == ("snouter")) {
        score = score + 40
    } else if (pig1 == "leaning jowler" && pig2 == ("dot" || "no dot")) {
        score = score + 15
    } else if (pig2 == "leaning jowler" && pig1 == ("dot" || "no dot")) {
        score = score + 15
    } else if (pig1 == "leaning jowler" && pig2 == "leaning jowler") {
        score = score + 60
    } else if (pig2 == "leaning jowler" && pig1 == "leaning jowler") {
        score = score + 60
    }
    document.getElementById("player" + currentPlayer + "HandScore").innerHTML = "Score:" + score

    if (pig1 == "no dot" && pig2 == "dot" || pig2 == "no dot" && pig1 == "dot") {
        document.getElementById("player" + currentPlayer + "HandScore").innerHTML = "Pig out!"
        score = 0
        pigOut()
    }

}

function checkWinner() {
    if (score + playerScores[currentPlayer] >= winningScore) {
        console.log(currentPlayer + "winner")
        document.getElementById("player" + currentPlayer).classList.remove("w3-dark-gray")
        document.getElementById("player" + currentPlayer).classList.add("w3-yellow")
        document.getElementById("player" + currentPlayer + "Heading").innerHTML = "Winner Winner"
        document.getElementById("replay").classList.remove("w3-hide")
    }
}

function disable() {
    document.getElementById("player0PassButton").disabled = true
    document.getElementById("player0RollButton").disabled = true
    document.getElementById("player1RollButton").disabled = true
    document.getElementById("player1PassButton").disabled = true
    document.getElementById("player2RollButton").disabled = true
    document.getElementById("player2PassButton").disabled = true
    document.getElementById("player3RollButton").disabled = true
    document.getElementById("player3PassButton").disabled = true
    document.getElementById("player" + currentPlayer + "RollButton").disabled = false
    document.getElementById("player" + currentPlayer + "PassButton").disabled = false
}