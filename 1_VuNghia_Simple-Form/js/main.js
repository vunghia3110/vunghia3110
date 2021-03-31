var ho = $("#ho").val().trim();
var ten = $("#ten").val().trim();
var email = $("#email").val().trim();
var phone = $("#phone").val().trim();
// var sex = $("#sex").val();
// var time = $("#time").val();

function checkHo(ho){
    if(ho.length<2||ho.length>10){
        $('#errorHo').html(
            `<div class="alert alert-warning" role="alert">
            Nhập vào không hợp lệ!
          </div>`
        ); return false;
    } else{return true;}
}
function checkTen(ten){
    if(ten.length<2||ten.length>20){
        $('#errorTen').html(
            `<div class="alert alert-warning" role="alert">
            Nhập vào không hợp lệ!
          </div>`
        ); return false;
    } else{return true;}
}
function checkEmail(email){
    if(!email.includes('@fsoft.com.vn')||!email.includes('@outlook.com')||!email.includes('@gmail.com')){
        $('#errorEmail').html(
            `<div class="alert alert-warning" role="alert">
            Nhập vào không hợp lệ!
          </div>`
        ); return false;
    } else{return true;}
}
function checkPhone(phone){
    if(phone.length!=9||phone[0]==0){
        $('#errorPhone').html(
            `<div class="alert alert-warning" role="alert">
            Nhập vào không hợp lệ!
          </div>`
        ); return false;
    } else{return true;}
}


function signUpCheck(){
    let ho = $("#ho").val().trim();
    let ten = $("#ten").val().trim();
    let email = $("#email").val().trim();
    let phone = $("#phone").val().trim();
    let sex = $("#sex").val();
    let time = $("#time").val();

    if(checkHo(ho)&&checkTen(ten)&&checkEmail(email)&&checkPhone(phone)){
        $('#success').html(
            `<div class="alert alert-success" role="alert">
            Working Done
          </div>`
        )
    }
}

