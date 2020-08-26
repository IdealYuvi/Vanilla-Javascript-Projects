// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessLeft = 3;

// UI Elements
let game = document.querySelector(".game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for submit
guessBtn.addEventListener("click", function () {
  // entered value
  guess = parseInt(guessInput.value);

  // check win or lose
  if (guess === winningNum) {
    // game over - win
    gameOver(true, `${guess} is the correct number. You Win!`);
  } else {
    guessLeft -= 1;

    if (guessLeft === 0) {
      //game over - lose
      gameOver(false, `Game Over, you lost. Correct number was ${winningNum}`);
    } else {
      // input validation
      if (isNaN(guess) || guess < 1 || guess > 10) {
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
        guessLeft += 1;
      } else {
        setMessage(`${guess} is not correct, ${guessLeft} guess left`);
      }
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

function setMessage(msg) {
  message.textContent = msg;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
