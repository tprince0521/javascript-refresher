document.getElementById('mine').innerHTML = 'no'

window.alert('i am an alert')

console.log('hello world')

function print(){
    let msg = document.getElementById("name").value
    console.log(msg)

    let txt = document.getElementById('animal').value
    console.log(txt)
    message.innerHTML = "hey " + msg + " dont you wish you were a " + txt
}

function colorSwitch(){
    document.getElementById('name').style.backgroundColor='red'

}