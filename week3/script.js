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

let screenLog = document.querySelector("#screen-log");
document.addEventListener('mousemove', logKey);

let position = [];
 
function logKey(e) {
    position.push([e.screenX, e.screenY ]);
   screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
    console.log(position);
}

function avarageMouse() {
    setInterval(document.addEventListener("mousemove", logKey), 1000);
}

// const positionA = setTimeout({
//     const avarage=
// }, 30000)
// console.log(positionA);

function productArray(numbers) {
  //your code here
  let newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    let mult = 1;
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
          mult *= numbers[j];
         
      }
    }
       console.log(newArr);
    newArr.push(mult);
  }
    return newArr;
}
console.log(productArray([3, 27, 4, 2]))
    