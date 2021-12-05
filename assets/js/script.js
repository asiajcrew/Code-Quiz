var timer = document.getElementById('timer');

// Timer that counts down from 75
function countdown() {
  var timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timer` to show the remaining seconds
      timer.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timer.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, display a Time Up message
      timer.textContent = "Time's Up!";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}

// Question 1 and answer choices
var body = document.body;
var question1 = document.createElement("div");
var question1List = document.createElement("ol");
var question1Li1 = document.createElement("li");
var question1Li2 = document.createElement("li");
var question1Li3 = document.createElement("li");
var question1Li4 = document.createElement("li");

question1.textContent = "Commonly used data types do NOT include:";
question1Li1.textContent = "Strings";
question1Li2.textContent = "Booleans";
question1Li3.textContent = "Alerts";
question1Li4.textContent = "Numbers";

question1List.appendChild(question1Li1);
question1List.appendChild(question1Li2);
question1List.appendChild(question1Li3);
question1List.appendChild(question1Li4);

// Event listener
function nextQuestion() {
    
}
question1Li1.addEventListener("click", function() {
    nextQuestion();
});

body.appendChild(question1);
body.appendChild(question1List);

countdown();