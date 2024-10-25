//do while loop

let num = 0;
do {
    console.log('The do loop number is: ' + num);
    num++;
} while (num < 5);
document.getElementById("demo1").innerHTML = 'The do loop number is: ' + num;



//while loop

// let input;
// while( input !== "exit"){
//     input = prompt('Enter the command "exit" to quit: ');
//     console.log('You entered: ' + input);
// }

let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;

//For loop

let cart = [10, 20, 30, 40, 50];
let add = 0;
for (let i = 0; i < cart.length; i++){
    add += cart[i];
}
console.log('Total amount is : ' + add);



for (let i = 0; i < 11; i++ ) {
    console.log('The loop number is:' + i);
}