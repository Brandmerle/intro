function sayHello(){
    console.log("Hello");
}

function init(){
    console.log("hello world!")
    sayHello();
}

window.onload = init; //-- this will wait until HTML and CSS gets resolved to run the JS

//variable Scope
