var timer = document.getElementById('timer');
var startButton = document.getElementById('start-button');
let currentQuestion = {}
let availableQuestions = []
var intro = document.querySelector(".welcome").textContent = "Coding Quiz Challenge";
var rules = document.querySelector(".quiz-rules").textContent = "Try to answer the following code-relatd questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds."

// var introduction = function() {
//   var introMessage = document.querySelector(".welcome")
//   introMessage.textContent = "Coding Quiz Challenge";
//   introMessage.className = "flex-col flex-center";
// };

// questions array
// let questions = [
//     {
//         quesion: 'Commonly used data types do NOT include:',
//         choice1: 'Strings',
//         choice2: 'Booleans',
//         choice3: 'Numbers',
//         choice4: 'Alerts',
//         answer: Alerts,
//     },
//     {
//         quesion: 'The condition in an if / else statement is enclosed with _____.',
//         choice1: 'Quotes',
//         choice2: 'Curly brackets',
//         choice3: 'Parathesis',
//         choice4: 'Square brackets',
//         answer: Parathesis, 
//     },
//     {
//         quesion: 'Arrays in Java Script can be used to store',
//         choice11: 'Numbers and strings',
//         answer2: 'Other arrays',
//         answer3: 'Booleans',
//         answer4: 'All of the above',
//         correctAnswer: Numbers and strings,   
//     },
//     {
//         quesion: 'String values must be enclosed within ____ when being assigned to variables.',
//         answer1: 'Commas',
//         answer2: 'Curly Brackets',
//         answer3: 'Quotes',
//         answer4: 'Parenthesis',
//         correctAnswer: Quotes,  
//     },
//     {
//         quesion: 'A very useful tool during development and debugging for printing content to the debugger is:',
//         answer1: 'JavaScript',
//         answer2: 'Terminal/ bash',
//         answer3: 'For loops',
//         answer4: 'Console log',
//         correctAnswer: Console log, 
//     }
// ]

// const scorePoints = 100
// const maxQuestions = 5

// When user clicks the start button, the timer will began & quiz questions will display
startButton.addEventListener('click', function() {
    countDown();
    questionOne();
    // startQuiz();
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

function questionOne () {
  var questionEl = document.querySelector("#first-question")
  var choicesEl = document.createElement("li")
  questionEl.textContent = "Commonly used data types do NOT include:";
  choicesEl.textContent = ["A", "B", "C", "D"]
  for (var choicesEl = 0; choicesEl < 4; choicesEl++)
  questionEl.appendChild(choicesEl);
}

// function startQuiz() {
//     availableQuestions = [questions]
//     currentQuestion = availableQuestions[questionsIndex]
//     quesion.innerText = currentQuestion.quesion
// }

// startQuiz();