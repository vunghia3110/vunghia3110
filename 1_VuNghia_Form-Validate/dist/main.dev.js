"use strict";

//Function validate ${str} must contain at least ${limit} characters
function minlength(str, limit) {
  if (str.length < limit) return false;else return true;
} //Function validate ${str} must not exceed ${limit} characters


function maxlength(str, limit) {
  if (str.length > limit) return false;else return true;
} //Function check character 


function isChar(str) {
  var regex = /[a-zA-Z]/g;
  if (regex.test(str)) return true;else return false;
} //Function check localPart email


function localPart(str) {
  var regex = /[a-zA-Z0-9\.\_]/g;
  if (regex.test(str.split('@')[0])) return true;else return false;
} //Check phone number


function regexPhone(str) {
  var regex = /^(\+84)\d{9}/g;
  return regex.test(str);
} //Function render messages errors


function renderError(err, idHtml) {
  if (err === '') {
    var message = document.getElementById(idHtml);
    message.textContent = err;
    document.getElementById(idHtml.split('-')[1]).classList.remove('red-error-form');
  } else {
    var _message = document.getElementById(idHtml);

    _message.textContent = err;
    document.getElementById(idHtml.split('-')[1]).classList.add('red-error-form');
  }
} //Function required input


function required(str) {
  if (str === '') return false;else return true;
} //Function check date of birth


function isDate(value) {
  var today = new Date();
  var inputDate = new Date(value);
  var firstDay = new Date(1910, 1, 1);
  if (today < inputDate || inputDate < firstDay) return false;else return true;
}

function isAge(value) {
  var today = new Date();
  var inputDate = new Date(value);
  var ENOUGH_AGE = 13 * (365 * 24 * 60 * 60 * 1000); // elapsed time in milliseconds

  if (today - inputDate > ENOUGH_AGE) return true;else return false;
} // Check correct email address


function isEmail(value) {
  var regexEmail = /@\w+(\.\w+)+/gi;
  var inputDomain = value.match(regexEmail)[0];

  for (var _len = arguments.length, domain = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    domain[_key - 1] = arguments[_key];
  }

  if (domain.indexOf(inputDomain) === -1) return false;else return true;
} // Validate Form 


var myForm = document.getElementById('myForm');
myForm.addEventListener('submit', validate);

function validate(event) {
  event.preventDefault(); // validate firstName

  {
    var firstName = document.getElementById('firstName').value;
    var errId = 'validate-firstName';
    var err = '';

    if (!required(firstName)) {
      err = 'You must enter your first name';
    } else if (!minlength(firstName, 2)) {
      err = 'First name must contain at least 2 characters';
    } else if (!maxlength(firstName, 10)) {
      err = 'First name do not exceed 10 characters';
    } else if (!isChar(firstName)) {
      err = 'First name contain only alphabetic characters';
    }

    renderError(err, errId);
  } //validate lastName

  {
    var lastName = document.getElementById('lastName').value;
    var _errId = 'validate-lastName';
    var _err = '';

    if (!required(lastName)) {
      _err = 'You must enter your last name';
    } else if (!minlength(lastName, 2)) {
      _err = 'First name must contain at least 2 characters';
    } else if (!maxlength(lastName, 20)) {
      _err = 'First name do not exceed 20 characters';
    } else if (!isChar(lastName)) {
      _err = 'First name contain only alphabetic characters';
    }

    renderError(_err, _errId);
  } //validate age

  {
    var dob = document.getElementById('dob').value;
    var _errId2 = 'validate-dob';
    var _err2 = '';

    if (!required(dob)) {
      _err2 = 'You must enter your date of birth';
    } else if (!isDate(dob)) {
      _err2 = 'Date of birth must choose from 01/01/1910 to current time';
    }

    renderError(_err2, _errId2);
  } //validate phone number

  {
    var phone = document.getElementById('phone').value;
    var _errId3 = 'validate-phone';
    var _err3 = '';

    if (!required(phone)) {
      _err3 = 'You must enter your phone number';
    } else if (!regexPhone(phone)) {
      _err3 = 'Phone numbers must begin with +84 and followed by 9 digits';
    }

    renderError(_err3, _errId3);
  } //validate gender 

  {
    var gender = document.getElementById('gender').value;
    var _errId4 = 'validate-gender';
    var _err4 = '';

    if (!required(gender)) {
      _err4 = 'You must choose one gender';
    }

    renderError(_err4, _errId4);
  } //validate email address

  {
    var email = document.getElementById('email').value;
    var _errId5 = 'validate-email';
    var _err5 = '';
    var requiredDomain = ['@gmail.com', '@fsoft.com.vn', '@outlook.com'];

    if (!required(email)) {
      _err5 = 'You must enter your email';
    } else if (!isEmail.apply(void 0, [email].concat(requiredDomain))) {
      _err5 = 'Your email must have the domain is ' + requiredDomain.join(', ');
    } else if (!localPart(email)) {
      _err5 = 'Include only lowercase letters, capital letters, numbers, periods, and _.';
    }

    renderError(_err5, _errId5);
  }
}