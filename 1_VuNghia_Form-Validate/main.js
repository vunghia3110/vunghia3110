//Function validate ${str} must contain at least ${limit} characters
function minlength(str, limit) {
    if (str.length < limit) return false;
    else return true;
}

//Function validate ${str} must not exceed ${limit} characters
function maxlength(str, limit) {
    if (str.length > limit) return false;
    else return true;
}
//Function check character 
function isChar(str) {
    let regex = /[a-zA-Z]/g;
    if (regex.test(str)) return true;
    else return false;
}
//Function check localPart email
function localPart(str) {
    var regex = /[a-zA-Z0-9\.\_]/g;
    if (regex.test(str.split('@')[0])) return true;
    else return false;
}
//Check phone number
function regexPhone(str) {
    var regex = /^(\+84)\d{9}/g;
    return regex.test(str);
}
//Function render messages errors
function renderError(err, idHtml) {
    if (err === '') {
        let message = document.getElementById(idHtml);
         message.textContent = err;
         document.getElementById(idHtml.split('-')[1]).classList.remove('red-error-form');
    } else {
        let message = document.getElementById(idHtml);
         message.textContent = err;
         document.getElementById(idHtml.split('-')[1]).classList.add('red-error-form');
    }

}
//Function required input
function required(str) {
    if (str === '') return false;
    else return true;
}
//Function check date of birth
function isDate(value) {
    let today = new Date();
    let inputDate = new Date(value);
    let firstDay = new Date(1910,1,1);
    if (today < inputDate || inputDate < firstDay) return false;
    else return true;
}

function isAge(value) {
    let today = new Date();
    let inputDate = new Date(value);
    const ENOUGH_AGE = 13 * (365 * 24 * 60 * 60 * 1000) // elapsed time in milliseconds
    if (today - inputDate > ENOUGH_AGE) return true;
    else return false;
}
// Check correct email address
function isEmail(value, ...domain) {
    var regexEmail = /@\w+(\.\w+)+/gi;
    let inputDomain = value.match(regexEmail)[0];
    if (domain.indexOf(inputDomain) === -1) return false;
    else return true;
}
// Validate Form 
let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', validate);

function validate(event) {
    event.preventDefault();
    // validate firstName
    {
        let firstName = document.getElementById('firstName').value;
        let errId = 'validate-firstName';
        let err = '';
        if (!required(firstName)) {
            err = 'You must enter your first name';
        } else if (!minlength(firstName,2)) { 
             err = 'First name must contain at least 2 characters';
        } else if (!maxlength(firstName,10)) {
            err = 'First name do not exceed 10 characters';
        } else if (!isChar(firstName)) {
            err = 'First name contain only alphabetic characters';
        }
        renderError(err,errId);
    }

    //validate lastName
    {
        let lastName = document.getElementById('lastName').value;
        let errId = 'validate-lastName';
        let err = '';
        if (!required(lastName)) {
            err = 'You must enter your last name';
        } else if (!minlength(lastName,2)) {
            err = 'First name must contain at least 2 characters';
        } else if (!maxlength(lastName,20)) {
            err = 'First name do not exceed 20 characters';
        } else if (!isChar(lastName)) {
            err = 'First name contain only alphabetic characters';
        }
        renderError(err,errId);
    }

    //validate age
    {
        let dob = document.getElementById('dob').value;
        let errId = 'validate-dob';
        let err = '';
        if (!required(dob)) {
            err = 'You must enter your date of birth';
        } else if (!isDate(dob)) {
            err = 'Date of birth must choose from 01/01/1910 to current time';
        }
        renderError(err, errId);

    }

    //validate phone number
    {
        let phone = document.getElementById('phone').value;
        let errId = 'validate-phone';
        let err = '';
        if (!required(phone)) {
             err = 'You must enter your phone number';
        } else if (!regexPhone(phone)) {
            err = 'Phone numbers must begin with +84 and followed by 9 digits';
        }
        renderError(err,errId);
    }
    //validate gender 
    {
        let gender = document.getElementById('gender').value;
        let errId = 'validate-gender';
        let err = '';
        if (!required(gender)) {
            err = 'You must choose one gender';
        }
        renderError(err,errId);
    }
    //validate email address
    {
        let email = document.getElementById('email').value;
        let errId = 'validate-email';
        let err = '';
        const requiredDomain = ['@gmail.com', '@fsoft.com.vn', '@outlook.com'];
        if (!required(email)) {
             err = 'You must enter your email';
        } else if (!isEmail(email, ...requiredDomain)) {
             err = 'Your email must have the domain is ' + requiredDomain.join(', ');
        } else if (!localPart(email)) {
            err = 'Include only lowercase letters, capital letters, numbers, periods, and _.';
        }
        renderError(err,errId);

    }
}