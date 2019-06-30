// Psuedo Coding 
/*

# When website is loaded
  * Only the Title and Start button is shown -- Check

# When Buttons are hovered (Don't forget to do this!)
  * use :hover (in css)

# When the Start button is clicked
  * Hide or Replace Start button with 
    * Time Remaining: -- Seconds  -- Check
    * Trivia Question
    * 4 answer buttons  --- Check

# When one of the answer buttons are clicked
  * If the answer is incorrect
    * Time Remaining is still displayed but the timer stops.
    * Trivia Question and answer buttons are hidden or replaced with
      * Nope! (Incorrect Answer Message)
      * The Correct Answer was: 
      * GIF or Image related to the correct answer
    * After few seconds, automatically shows next trivia question and reset time remaining and run the timer.
  
  * If the answer is correct
    * Time remaining timer stops and is still displayed
    *  Trivia Question and answer buttons are hidden or replaced with
      * Correct!
      * GIF or image related to the correct answer
  
  * If the answer is not selected and timer runs out
    * Time Remaining stops at 0, it is displayed.
    * Trivia Question and answer buttons are hidden or replaced with
      * Out of Time! (Time's up message)
      * Display correct answer
      * GIF or image related to the correct answer
    * After few seconds, automatically shows the next trivia question and reset time remaining and run the timer.

# Aftrer last question
  * Timer is still displayed. ( I believe it does not really matter if it is being displayed or not.)
  * All done, here's how you did! (ending message) is displayed
  * The counter with following features are displayed
    * Correct answers:
    * Incorrect answers:
    * Unanswered: 
  * Start Over? button is displayed

# When Start Over button is clicked
  * It basically resets and start the game again (Probably will have same or similar functionality with START button)
  

*/

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var intervalId;
var timer = 20;


$(".start-button").on("click", startGame);  // Clicking START button triggers startGame function


// Functions
// =============================================================================

// For when the start button is clicked.
function startGame() {
 
  $(".start-button").hide();
  $(".game-contents").show();
  
  startTimer();

  // Display Question

}

// For Timer
function startTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
} 

function decrement() {

  timer--;

  $(".timer").html("<h3 class='timer'>" + "Time Remaining: " + timer + " Seconds" + "</h3>");

  if (timer === 0) {

    stop();

    // display times up
  }
}

function stop() {
  clearInterval(intervalId);
}

// for questions

var questions = [
  {
    question: "What is 1+1?",
    answers: {
      a: "3",
      b: "0",
      c: "1",
      d: "2"
    },
    correct: "d"
  }
];

function showQuestions() {

}

function showResults() {
  // show the result for 5 seconds when button is clicked or timer is over.
  if (choice === correct) {
    // show correct 
  } else {
    // show incorrect
  }

  if (timer = 0) {
    // show time's up
  }

}





