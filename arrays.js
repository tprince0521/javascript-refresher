let names = ["Tyler", "Olivia", "Lilly", "Ady", "Micha"]

names.push("Mr. Gorton")

console.log(names)

console.log("the second name is " + names[1])

function printAllNames(sort) {
    if (sort){
        names.sort()
    }
    for (let i = 0; i < names.length; i++) {
        console.log(names[i])
    }
}

printAllNames(false)

names.sort()
console.log("--------")

printAllNames(true)