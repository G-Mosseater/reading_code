//try to change the value of "number" by erasing 10 and writing a different number and observe the different output
let number = 10;
if (number > 5) {
    document.getElementById("message").innerHTML = "Number is greater than 5";
} else {
    document.getElementById("message").innerHTML = "Number is 5 or less";
}
// Variable 'number' takes a integer as a value
// A if - else statement is created
// if vlaue in number > 5  we insert the element 'message' into the document using .innerHTML property. The 'message' element takes a string value "Number is greater than 5"
// else: the 'message' element value will be "Number is 5 or less"