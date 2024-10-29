
const add = function(a, b){
    return a + b;
}
let x = add(5, 10);
console.log(x);


function greet(nam)
{
    return 'Hello ' + nam;
}

console.log(greet('Haris'));


const student = {
    fname : 'Haris',
    lname : 'Aamir',
    age : 24,
    city : 'Lahore',
    class : function (){
        return this.fname + " " + this.lname;
    },
}

console.log(student.class());


function validateEmail(email){
    const check = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z] {2,6}/;
    return check.test(email);
}