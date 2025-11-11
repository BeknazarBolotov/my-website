const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

guessBtn.addEventListener("click", () => {
  const guess = Number(guessInput.value);
  attempts++;
  attemptsDisplay.textContent = attempts;

  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    message.style.color = "green";
    guessBtn.disabled = true;
  } else if (guess < randomNumber) {
    message.textContent = "Too low! Try again.";
    message.style.color = "orange";
  } else if (guess > randomNumber) {
    message.textContent = "Too high! Try again.";
    message.style.color = "orange";
  }
});
