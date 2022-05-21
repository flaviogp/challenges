let valid = true;

function toggleMsg(valid){
 valid && msgSuccess() || msgError();
}

function msgSuccess(){
    const success = document.querySelector('.success-msg');
    success.classList.add('success');
}

function msgError(){
    const error = document.querySelector('.error-msg');
    error.classList.add('error');
}

toggleMsg(valid);