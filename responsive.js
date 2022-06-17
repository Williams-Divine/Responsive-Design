const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

//show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className='formControl error';
    const small = formControl.querySelectorAll('small');
    small.innerText = message;
}
//show sucess outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'formControl success';
}

//check mail is valid
function isValidEmail(email){
   const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
} 
//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function (input) {
        if(input.value.trim() ===''){
            showError(input, '');
        }else{
            showSuccess(input);
        }
    });
}
//Event listenere
form.addEventListener('submit', function(e) {
    e.preventDefault();

   checkRequired([ firstName,lastName,email,password]);
})
