let student1 = {fName: 'tayler', lName: 'principe', gpa: 4, volleyball: false}

console.log('I know ' + student1.fName + " " + student1.lName)

let student2 = {fName: 'sophia', lName: 'principe', gpa: 4, volleyball: true}

if (student1.volleyball){
    console.log(student1.fName + ' plays volleyball')
} else {
    console.log(student1.fName + ' does not play volleyball')
}

let students = [student1]

students.push(student2)

students.push({fName: 'mason', lName: 'principe', gpa: 4, volleyball: false})

student1.fName="tyler"

student2.fName='alexis'

students[students.length-1].gpa = students[students.length-1].gpa += 0.5

console.table (students)

