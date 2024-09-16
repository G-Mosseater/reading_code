let numbers = [1, 2, 3, 4, 5];
let listHTML = "";

for (let i = 0; i < numbers.length; i++) {
    listHTML += "<li>Number at index " + i + " is " + numbers[i] + "</li>";
}

document.getElementById("numberList").innerHTML = listHTML;


// We created the variable 'numbers' storing an array of integeres from 1 to 5
// Next we create a variable that stores an empty string.

// We create a for loop with the variable i that starts at number 0
// The cycle continues until i is less than the lengths of the array (5); (.length property used)

// The i++ operator increases the value of i by one after each cycle
// During every cycle we use the += operator that adds a new list <li> to an existing variable (listHTML, the empty string we created before),
// As the += operator appends content to the empty string, the content will include i which is the curent position in the array 
// and the value of that index numbers[i]

// finally we insert the list to a HTML element called numberList using the property innerHTML = listHTML (the empty variable we created in the beginning)

