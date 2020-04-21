// Your code here
function moveDodgerLeft(){
    let leftNum = dodger.style.left.replace("px", "");
    let left = parseInt(leftNum);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let rightNum = dodger.style.left.replace("px", "");
    let right = parseInt(rightNum);
    if (right > 0 && right < 360) {
        dodger.style.left = `${right + 1}px`
    }
}