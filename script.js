let form = document.querySelector('#form');
let username = document.querySelector('#username');
let mailid = document.querySelector('#mailid');
let password = document.querySelector('#password');
let cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e)=>{
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    let nameVal = username.value.trim();
    let emailVal = mailid.value.trim();
    let passVal = password.value.trim();
    let cpassVal = cpassword.value.trim();

    // username
    if(nameVal===""){
        success=false;
        setError(username, 'username required')
    }
    else{
        setSuccess(username)
    }

    // email
    if(emailVal=== ""){
        success=false;
        setError(mailid, 'email required')
    }else{
        setSuccess(mailid)
    }

    // password
    if(passVal===""){
        success=false;
        setError(password, 'password is required')
    }else if(passVal.length<8){
        success=false;
        setError(password, 'password must be atleast 8 char')
    }else{
        setSuccess(password)
    }

    // cpassword
    if(cpassVal===""){
        success=false;
        setError(cpassword, 'password is required')
    }else if(cpassVal!==passVal){
        setError(cpassVal, 'password does not match')
    }else{
        setSuccess(cpassword)
    }
    return success;
}


function setError(element, message){
    let inputGroup = element.parentElement;
    let errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element){
    let inputGroup = element.parentElement;
    let errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}