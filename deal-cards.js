// let card1 = {suit:"Hearts",rank:"Ace"}
// let card2 = {suit:"Diamonds", rank:7}
// let card3 = {suit:"Spades", rank:'King'}
let deck = []
let suits=["Clubs", "Hearts", "Spades", "Diamonds"]
for (let i = 2; i < 11; i++) {
    deck.push({ suit: "Clubs", rank: i })
}
for (let i = 2; i < 11; i++) {
    deck.push({ suit: "Hearts", rank: i })
}
for (let i = 2; i < 11; i++) {
    deck.push({ suit: "Spades", rank: i })
}
for (let i = 2; i < 11; i++) {
    deck.push({ suit: "Diamonds", rank: i })
}


console.log(deck)

