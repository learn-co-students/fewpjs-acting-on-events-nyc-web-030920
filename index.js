// Your code here
let dodger = document.getElementById("dodger");

dodger.style.background = "#000000";

dodger.style.background = "#FF69B4";

console.log(dodger.style.left); // "180px"
console.log(dodger.style.bottom); // "0px"

dodger.style.bottom = "100px";

dodger.style.bottom = "0px";

// document.addEventListener("keydown", function(e) {
//   console.log(e.key);
// });

// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowLeft") {
//     let leftNumbers = dodger.style.left.replace("px", "");
//     let left = parseInt(leftNumbers, 10);
 
//     dodger.style.left = `${left - 1}px`;
//   }
// });

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowLeft") {
//     moveDodgerLeft();
//   }
// });

// We have not yet implemented moving the dodger to the right. Can you do it? With the code implemented from the code along, think about what needs to change to make a moveDodgerRight() function. We'll need another e.key in the event listener, and instead of moving the dodger ${left - 1}px, we'll be moving it ${left + 1}px.

function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace('px', '');
  let right = parseInt(rightNumbers, 10);

  if(right < 360) {
    dodger.style.left = `${right + 1}px`;
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (e.key === 'ArrowRight') {
    console.log(e.key);
    moveDodgerRight();
  }
})