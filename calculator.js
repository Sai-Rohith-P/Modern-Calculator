let display = document.getElementById("top");
display.innerHTML="0";
function appendelemnt(a) {
    const allowedCharacters = "0123456789+-*/.%";
    if (allowedCharacters.includes(a)) {
        if (display.innerHTML === '0' && a !== '0' && !isNaN(a)) {
            display.innerHTML = a;
        } else {
            display.innerHTML += a;
        }
    }
}

function clearr(){
    display.innerHTML="0";
}
document.getElementById("del").onclick=delatelast;
function delatelast() {
    if (display.innerHTML.length === 1 || display.innerHTML === '0') {
        display.innerHTML = '0';
    } else {
        display.innerHTML = display.innerHTML.slice(0, -1);
    }
}
function calculation(){
    try{
        let result = eval(display.innerHTML);
        display.innerHTML = result;
    }catch(e){
        display.innerHTML="error";
    }
}







// let display = document.getElementById("top");
// display.innerHTML = "0";

// // Flag to track if the last character was an operator
// let lastWasOperator = false;

// function appendelemnt(a) {
//     const allowedCharacters = "0123456789+-*/.%";
//     const operators = "+-*/%";
    
//     if (allowedCharacters.includes(a)) {
//         // Handle replacing '0' with a number
//         if (display.innerHTML === '0' && a !== '0' && !operators.includes(a)) {
//             display.innerHTML = a;
//         } else if (operators.includes(a) && lastWasOperator) {
//             // Replace the last operator if a new operator is pressed
//             display.innerHTML = display.innerHTML.slice(0, -1) + a;
//         } else {
//             // Append the character to the display
//             display.innerHTML += a;
//         }
//         lastWasOperator = operators.includes(a);
//     }
// }

// function clearr() {
//     display.innerHTML = "0";
//     lastWasOperator = false;
// }

// function delatelast() {
//     display.innerHTML = display.innerHTML.slice(0, -1) || "0";
//     if (display.innerHTML.length === 0) {
//         display.innerHTML = "0";
//     }
//     lastWasOperator = false;
// }

// function calculation() {
//     try {
//         // Handle the case where the display ends with an operator
//         if (lastWasOperator) {
//             display.innerHTML = display.innerHTML.slice(0, -1);
//         }
//         let result = eval(display.innerHTML);
//         display.innerHTML = result;
//         lastWasOperator = false;
//     } catch (e) {
//         display.innerHTML = "Error";
//         lastWasOperator = false;
//     }
// }

// // Event listeners for buttons
// document.getElementById("clear").onclick = clearr;
// document.getElementById("del").onclick = delatelast;
// document.getElementById("equals").onclick = calculation;

// // Assign the appendelemnt function to the number and operator buttons
// document.querySelectorAll(".butn, .but1, .butnn1").forEach(button => {
//     button.addEventListener("click", function() {
//         appendelemnt(this.innerHTML.trim());
//     });
// });
