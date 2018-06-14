people = [];
function Login(email, password) {
    this.email = email;
    this.password = password;
    return this;
}

function Person(name, email, password) {
    this.name = name;
    this.__proto__ = new Login(email, password)
    return this;
}


function $(id) {
    return document.getElementById(id);
}

function register() {

    let name = $('name').value;
    let email = $('email').value;
    let password = $('password').value;
    let person = new Person(name, email, password);

    people.push(person);
    return false;

}

function daxilOl(login_email, login_password) {
    let email = $('login_email').value;
    let password = $('login_password').value;
    let finded = false;
    for (let k of people) {
        if (email == k.email && password == k.password)
            finded = true;

    }

    if (finded == true)
        alert('tapildi')
    else
        alert('not founded')

}

var prodcuts = [];

let pd1