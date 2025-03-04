//console.log('Hello World!');

//let x = "how are you?"
//console.log(x)

//let greeting = "Hello"
let fname = "Gob"

//console.log(greeting + ' ' + fname + '!')

let age = 13

console.log('you are ' + age)

console.log("in 10 years you\'ll be " + (age + 10))

if (fname == 'Bob'){
    console.log('i Knew it was you ' + fname)
} else {
    console.log('Hey ' + fname + ", you're not bob." )
}

let iAmWearingABelt = true
let iAmWearingGlasses = false

if (iAmWearingABelt && iAmWearingGlasses){
    console.log ('probably not Mr. Gorton')
}

if (iAmWearingABelt && !iAmWearingGlasses){
    console.log ('probably is Mr. Gorton')
}

if (iAmWearingABelt || iAmWearingGlasses){
    console.log ('probably some dude')
}

 for (let i = 0; i < 11; i++) {
    console.log(i)
 }