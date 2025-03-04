let fizz = 0
let buzz = 0
let fizzbuzz = 0
let i = 0
while (fizzbuzz < 1001){
    if (i % 3 == 0 && i % 5==0) {
        console.log(i + " fizzbuzz")
        fizzbuzz = (fizzbuzz + 1)
    }
    else if (i % 5 == 0) {
        console.log(i + " buzz")
        buzz = (buzz + 1)
        fizzbuzz++
    }
    else if (i % 3 == 0) {
        console.log(i + " fizz")
        fizz = (fizz + 1)
        fizzbuzz++
    } else {
        console.log(i)
        fizzbuzz++
    }

}
console.log(fizz + " fizzes")
console.log(buzz + " buzzes")
console.log(fizzbuzz + " fizzbuzzes")