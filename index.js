let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

  function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left < 360) {
      dodger.style.left = `${left + 5}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

  function moveDodgerUp() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
   
    if (bottom <= 370) {
      dodger.style.bottom = `${bottom + 5}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp") {
      moveDodgerUp();
    }
  });

  function moveDodgerDown() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
   
    if (bottom >= 0) {
      dodger.style.bottom = `${bottom - 5}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown") {
      moveDodgerDown();
    }
  });