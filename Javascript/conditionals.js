// if Statement

function validateForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert('Please enter email and password');
        return false;
    } elseif (email !== '@'); {
        alert('Please enter a valid email');
        return false;
    }
}

let marks = 500;

let score = prompt('what is your marks?');


if (marks >= 400) {
  console.log('You have A grade')
}  else if( marks >=  350){
  console.log('You have B grade')
} else{
  console.log('You have C grade')
}