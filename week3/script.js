// When the button first is clicked it should first log out 0. 
// The next time it is clicked it should log out 1, etc.

// Clicking the second button should also count up and logout the same variable.


let number = -1;
const buttonElement1 = document.querySelector("button1");
const buttonElement2 = document.querySelector("button2");

function countFunc() {
    number += 1;
    console.log(number);
    
}

function consolFunc() {
    console.log(number);
}

// buttonElement1.addEventListener(countFunc);
// buttonElement2.addEventListener(consolFunc);





// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// DELAY CLICKER

// Create a button in html with the text "Log in 3 seconds"
// When the button is clicked it should wait 3 seconds and then log the text 
// "This text was delayed by 3 seconds".
const buttonElement3 = document.querySelector("button3");

function treeSecondLog() {
    setTimeout(() => {
        console.log("3 seconds has elapsed!");
    }, 3000);
}

// setTimeout(treeSecondLog, 3000);

console.log(buttonElement3);
// buttonElement3.addEventListener("click", treeSecondLog);


//Page onload

const functionIsLoaded = function () {
  console.log("DOM fully loaded and parsed");
};
window.addEventListener("load", functionIsLoaded);

// Mouse position

