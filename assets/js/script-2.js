var timer = document.getElementById('timer')
var startButton = document.getElementById('start-button')

// When user clicks the start button, the timer will began
startButton.addEventListener('click', function() {
    countDown();
});

// Timer that counts down from 75
function countDown() {
  var timeLeft = 75;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timer.textContent = "Time's Up!";
      clearInterval(timeInterval);
    }
  }, 1000);
}

countdown();