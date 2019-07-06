// Psuedo Coding 
/*

# When website is loaded
  * Only the Title and Start button is shown -- Check

# When Buttons are hovered (Don't forget to do this!)
  * use :hover (in css)

# When the Start button is clicked
  * Hide or Replace Start button with 
    * Time Remaining: -- Seconds  -- Check
    * Trivia Question displayed -- Check
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
    * Time Remaining stops at 0, it is displayed. -- check
    * Trivia Question and answer buttons are hidden or replaced with
      * Out of Time! (Time's up message) -- check
      * Display correct answer -- check
      * Times up GIF -- check
    * After few seconds, automatically shows the next trivia question and reset time remaining and run the timer again. -- check

# Aftrer last question
  * Timer is still displayed. ( I believe it does not really matter if it is being displayed or not.)
  * All done, here's how you did! (ending message) is displayed
  * The counter with following features are displayed
    * Correct answers:
    * Incorrect answers:
    * Unanswered: 
  * Start Over? button is displayed -- Check

# When Start Over button is clicked
  * It basically resets and start the game again (Probably will have same or similar functionality with START button)
  

*/

// the game did not work without document ready method for event listeners --- test if it works without document.ready method if the event listeners are located at the bottom.
$(document).ready(function() {

  // event listeners
  $(".start-button").on("click", startGame);  // Clicking START button triggers startGame function
  $(".restart-button").on("click", startGame);
  $(document).on('click' , '.answerBtn', guessChecker);

})

var trivia = {
  // trivia properties
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  currentSet: 0,
  timer: 10,
  timerId: '',
  timerOn: false,

  // questions, answer options, and correct answers
  questions: {
    q1: "Which company publishes 'World of Warcraft'?",
    q2: "What year was 'World of Warcraft' released?",
    q3: "What was the first expansion added to 'World of Warcraft'?",
    q4: "How many copies of the 'Wrath of the Lich King' expansion sold on the first day?",

  },

  options: {
    q1: ["Rockstar Games", "Blizzard Entertainment", "Riot Games", "Steam"],
    q2: ["2004", "2001", "1999", "2007"],
    q3: ["Cataclysm", "The Burning Crusade", "Wrath of the Lich King", "Mist of Pandaria"],
    q4: ["10,000", "523,000", "2.8 million", "1.3 million"],
    
  },

  answers: {
    q1: "Blizzard Entertainment",
    q2: "2004",
    q3: "The Burning Crusade",
    q4: "2.8 million",

  },

  // correctGifs
  // wrongGifs
}

// function to initialize game
function startGame() {
  trivia.correct = 0;
  trivia.incorrect = 0;
  trivia.unanswered = 0;
  trivia.currentSet = 0;

  // Don't think I need to have timer here, since nextQuestion will display timer. -- WRONG. Whenever user click start button to restart the game after first game, the counter speeds up without clearInterval.
  clearInterval(trivia.timerId);
  // show timer
  $(".timer").text("Time Remaining: " + trivia.timer + " Seconds")

  // hide start button and show game-contents
  $(".start-button").hide();
  $(".restart-button").hide();
  // show game features
  $(".game-contents").show();
  $(".timer").show();
  $(".question").show();
  $(".gif").show();
  $(".button-group").show();

  // empty last result (the final score)
  $(".results").text("");

  // ask first question
  nextQuestion();

}

function nextQuestion() {

  // set timer to 20 sec
  trivia.timer = 10;
  // this method below quickly reset the timer back to 20 and show it. Without it, if previous question was answered at 15 sec, user will see 15 sec in timer briefly before it resets back to 20 sec.
  $(".timer").text("Time Remaining: " + trivia.timer + " Seconds")

  // to prevent timer from speeding up
  // run timerStart
  if (trivia.timerOn === false) {
    trivia.timerId = setInterval(timerStart, 1000)
  }

  // gets all the questions then indexes current question
  var questionLists = Object.values(trivia.questions)[trivia.currentSet];
  $(".question").text(questionLists);
  console.log(questionLists);

  // an array of all the user options for the current question
  var answerOptions = Object.values(trivia.options)[trivia.currentSet];
  console.log(answerOptions);

  // creates all the trivia guess options in the html (appending it to button-group)
  $.each(answerOptions, function(index, key) {

    $(".button-group").append($('<button type="button" class ="answerBtn btn btn-outline-success">'+ key +'</button>'))

  })

}

// function to decrement timer and increment unanswered when timer runs out
function timerStart() {
  
  // if timer still has time left and if there are still questions left to ask
  // trivia.currentSet start from 0 so on the last question currentSet will be 1 less than Object.keys(trivia.questions).length.
  if (trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length) {
    $(".timer").text("Time Remaining: " + trivia.timer + " Seconds")
    trivia.timer--;
  }

  // if timer reaches 0, 
  else if (trivia.timer === -1) {
    // increment unanswered counter
    trivia.unanswered++;
    // stop question timer
    clearInterval(trivia.timerId);
    //run removeResult for 3 sec to hide buttons
    resultId = setTimeout(removeResult, 3000);

    $(".answerBtn").remove();
    $(".results").append('<h3 class="times_up">' + "Time's Up!" + '</h3>');
    $(".question").append('<p class="answer">' + 'The Answer Was: ' + Object.values(trivia.answers)[trivia.currentSet] + '</p>');
    $(".gif").append('<img src="assets/images/times_up.gif" class="result_gif">')

  }

  // if there are no more questions left to ask
  else if (trivia.currentSet === Object.keys(trivia.questions).length) {
    // show the final result score
    $(".results")
      .html("<h3>All done, here's how you did!</h3>" + 
      '<p>Total correct answers: ' + trivia.correct + '</p>' +
      '<p>Total inccorect answers: ' + trivia.incorrect + '</p>' + '<p>Total unasnwered questions: ' + trivia.unanswered + '</p>');

    // hide previous game info and show restart button
    $(".timer").hide();
    $(".question").hide();
    $(".gif").hide();
    $(".button-group").hide();
    // to restart the game. When it's clicekd, the timer starts again but the question and answeroption buttons aren't.
    $(".restart-button").show();
  }
}

// removeResult is to trigger nextQuestion function after 3 sec with incremented trivia.currentSet so it can display next question and answerOptions.
// removeResult function is executed 3 seconds after timer runs out or if user clicked answerBtn to clean up the unncessary previous game info before next question.
function removeResult() {

  // increase currentSet
  trivia.currentSet++
  // remove previous result
  $(".results").text("");
  // remove previous answeroption -- does not need it here since the answerBtn should be removed when the timer reaches 0
  // $(".answerBtn").remove();

  // remove previous gifs
  $(".result_gif").remove();
  // run nextQuestion
  nextQuestion();

}



