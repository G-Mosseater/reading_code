function greet(name) {
    document.getElementById("message").innerHTML = "Hello, " + name;
}

greet("Jerry");

// The function 'greet' takes the parameter 'name'
// The element 'message' is being inserted into document (which represents the web page) using .innerHTML property. This element 
// takes the value of a string "Hellp" and the parameter value of our function 'greet'

// when we call function "greet" the message will display  Hello + the name we input

