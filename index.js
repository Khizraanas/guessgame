
var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

function guessNumber() {
  var guess = parseInt(document.getElementById("guessInput").value);
  var feedback = document.getElementById("feedback");

  if (guess > randomNumber) {
    feedback.innerText = "Too high!";
  } else if (guess < randomNumber) {
    feedback.innerText = "Too low!";
  } else {
    feedback.innerText = `Congratulations! You win`;
  } 
}

