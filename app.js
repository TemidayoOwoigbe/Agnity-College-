//opening the menu 
function open_nav() {
    document.querySelector('#open-btn').style.display = 'none';
    document.querySelector('#close-btn').style.display = 'block';
    document.querySelector('#menu').style.height = '235px';
}

//closing the menu 
function close_nav() {
    document.querySelector('#open-btn').style.display = 'block';
    document.querySelector('#close-btn').style.display = 'none';
    document.querySelector('#menu').style.height = '50px';
}

//Validation
function func(e) {
    // Get form input elements
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');

    // Set error message elements
    var nameError = document.querySelector('#name-error');
    var emailError = document.querySelector('#email-error');
    var subjectError = document.querySelector('#subject-error');
    var messageError = document.querySelector('#message-error');

    // Validation for the name input
    if (name.value === '') {
        name.parentElement.classList.add('error');
        nameError.innerHTML = `This input can't be empty`;
    } else {
        name.parentElement.classList.remove('error');
        nameError.innerHTML = '';
    }

    // Validation for the email input
    if (email.value === '') {
        email.parentElement.classList.add('error');
        emailError.innerHTML = `This input can't be empty`;
    } else {
        // Check if email is in a valid format using a regular expression
        var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(email.value)) {
            email.parentElement.classList.add('error');
            emailError.innerHTML = `Enter a valid email`;
        } else {
            email.parentElement.classList.remove('error');
            emailError.innerHTML = '';
        }
    }
    
    if (subject.value === '') {
        subject.parentElement.classList.add('error');
        subjectError.innerHTML = `This input can't be empty`;
    } else {
        subject.parentElement.classList.remove('error');
        subjectError.innerHTML = '';
    }
    
    if (message.value === '') {
        message.parentElement.classList.add('error');
        messageError.innerHTML = `This input can't be empty`;
    } else {
        message.parentElement.classList.remove('error');
        messageError.innerHTML = '';
    }

    // Prevent form submission if any errors are present
    if (name.parentElement.classList.contains('error') || email.parentElement.classList.contains('error') || subject.parentElement.classList.contains('error') || message.parentElement.classList.contains('error')) {
        event.preventDefault();
    }
}
