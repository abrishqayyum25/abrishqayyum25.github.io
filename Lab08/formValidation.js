var uname = document.querySelector('#name');
var email = document.querySelector('#email');
var phone = document.querySelector('#phone');
var age = document.querySelector('#age');
var message = document.querySelector('#message');
var form = document.querySelector('#myForm');

uname.addEventListener('change', check_name);
email.addEventListener('change', check_email);
phone.addEventListener('change', check_phone);
age.addEventListener('change', check_age);
message.addEventListener('change', check_message);

form.addEventListener('submit', validate);

function check_name() {
    if (this.value.length < 3) {
        this.style.backgroundColor = "red";
    } else {
        this.style.backgroundColor = "white";
    }
}

function check_email() {
    var re = /[^@]+@[^\.]+/;   

    if (this.value.length < 5 || re.test(this.value) == false) {
        this.style.backgroundColor = "red";
    } else {
        this.style.backgroundColor = "white";
    }
}
function check_phone()
 {
     var re = /^\+?[0-9\s]{7,15}$/;
      if (this.value != "" && re.test(this.value) == false)
     { 
        this.style.backgroundColor = "red"; 
    } 
    else
     { this.style.backgroundColor = "white"; 

     }
     }
function check_age() {
    var value = +this.value; 

    if (value < 10 || value > 100 || isNaN(value)) {
        this.style.backgroundColor = "red";
    } else {
        this.style.backgroundColor = "white";
    }
}

function check_message() {
    if (this.value.length > 0 && this.value.length < 5) {
        this.style.backgroundColor = "red";
    } else {
        this.style.backgroundColor = "white";
    }
}


function validate(e) {

    check_name.call(uname);
    check_email.call(email);
    check_phone.call(phone);
    check_age.call(age);
    check_message.call(message);

    if (
        uname.style.backgroundColor == "red" ||
        email.style.backgroundColor == "red" ||
        phone.style.backgroundColor == "red" ||
        age.style.backgroundColor == "red" ||
        message.style.backgroundColor == "red"
    ) {
        e.preventDefault();   
        alert("Please correct the highlighted fields.");
    }
}
