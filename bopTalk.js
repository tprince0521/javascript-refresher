let message = "My name is Tyler"
let start = 0
let end = 1
let length = message.length
let i = 0
let BopTalk = message.slice(start,end)
let startNum = 0
let endNum = 1

for (let i = 1; i < (length + 1); i++){
    startNum = (startNum + 1)
    endNum = (endNum + 1)
    BopTalk = message.slice((startNum), (endNum))
    console.log (BopTalk)
}

console.log (start, end)
console.log(length)
