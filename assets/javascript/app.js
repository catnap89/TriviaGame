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
    * Time Remaining is still displayed but the timer stops. -- check
    * Trivia Question and answer buttons are hidden or replaced with
      * Nope! (Incorrect Answer Message) -- check
      * The Correct Answer was: -- check
      * Wrong! gif -- check
    * After few seconds, automatically shows next trivia question and reset time remaining and run the timer. -- check
  
  * If the answer is correct
    * Time remaining timer stops and is still displayed -- check
    *  Trivia Question and answer buttons are hidden or replaced with
      * Correct! -- check
      * GIF or image related to the correct answer -- check
  
  * If the answer is not selected and timer runs out
    * Time Remaining stops at 0, it is displayed. -- check
    * Trivia Question and answer buttons are hidden or replaced with
      * Out of Time! (Time's up message) -- check
      * Display correct answer -- check
      * Times up GIF -- check
    * After few seconds, automatically shows the next trivia question and reset time remaining and run the timer again. -- check

# Aftrer last question
  * Remove timer -- check
  * All done, here's how you did! (ending message) is displayed -- check
  * The counter with following features are displayed -- check
    * Correct answers:
    * Incorrect answers:
    * Unanswered: 
  * Start Over? button is displayed -- Check

# When Start Over button is clicked
  * It basically resets and start the game again (Probably will have same or similar functionality with START button) -- check
  

*/

// the game did not work without document ready method for event listeners --- test if it works without document.ready method if the event listeners are located at the bottom.
$(document).ready(function() {

  // event listeners
  $(".start-button").on("click", startGame);  // Clicking START button triggers startGame function
  $(".restart-button").on("click", startGame);
  // for the dynamically created buttons
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
    q1: 'Which company publishes "World of Warcraft"?',
    q2: 'What year was "World of Warcraft" released?',
    q3: 'What was the first expansion added to "World of Warcraft"?',
    q4: 'How many copies of the "Wrath of the Lich King" expansion sold on the first day?',

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
  correctGifs: {
    q1: '"assets/images/blizzard_entertainment.gif"',
    q2: '"assets/images/what_year_is_it.gif"',
    q3: '"assets/images/illidan.gif"',
    q4: '"assets/images/lich_king.gif"',
  },

  // wrongGifs doesn't have to match the question, pick random within the array.
  wrongGifs: ['<img src="assets/images/wrong_trump.gif" class="result_gif">', '<img src="assets/images/wrong_2.gif" class="result_gif">', '<img src="assets/images/wrong_3.gif" class="result_gif">', '<img src="assets/images/wrong_4.gif" class="result_gif">'],

  // timesupGifs
  timesUpGifs: ['<img src="assets/images/times_up.gif" class="result_gif">', '<img src="assets/images/times_up_2.gif" class="result_gif">', '<img src="assets/images/times_up_3.gif" class="result_gif">', '<img src="assets/images/times_up_4.gif" class="result_gif">'],

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
  $(".timer").html("Time Remaining: " + '<span class="timer-number">' + trivia.timer + '</span>'+ " Seconds")

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
  $(".final-score").text("");
  

  // ask first question
  nextQuestion();

}

function nextQuestion() {

  // set timer to 10 sec
  trivia.timer = 10;
  // this method below quickly reset the timer back to 20 and show it. Without it, if previous question was answered at 15 sec, user will see 15 sec in timer briefly before it resets back to 20 sec.
  $(".timer").html("Time Remaining: " + '<span class="timer-number">' + trivia.timer + '</span>'+ " Seconds")

  // to prevent timer from speeding up
  // run timerStart
  if (trivia.timerOn === false) {
    trivia.timerId = setInterval(timerStart, 1000)
  }

  // gets all the questions then indexes current question
  var questionLists = Object.values(trivia.questions)[trivia.currentSet];
  $(".question").text(questionLists);

  // an array of all the user options for the current question
  var answerOptions = Object.values(trivia.options)[trivia.currentSet];

  // creates all the trivia guess options in the html (appending it to button-group)
  $.each(answerOptions, function(index, key) {

    $(".button-group").append($('<button type="button" class ="answerBtn btn btn-success">'+ key +'</button>'))

  })

}

// function to decrement timer and increment unanswered when timer runs out
function timerStart() {
  
  // if timer still has time left and if there are still questions left to ask
  // trivia.currentSet start from 0 so on the last question currentSet will be 1 less than Object.keys(trivia.questions).length.
  if (trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length) {
    $(".timer").html("Time Remaining: " + '<span class="timer-number">' + trivia.timer + '</span>' + " Seconds")
    trivia.timer--;
  }

  // if timer reaches 0, 
  else if (trivia.timer === -1) {
    // random number between 0 to trivia.timesUpGifs array's length -1
    var random = Math.floor(Math.random() * (trivia.timesUpGifs).length);
    // increment unanswered counter
    trivia.unanswered++;
    // stop question timer
    clearInterval(trivia.timerId);
    //run removeResult for 3 sec to hide result info
    resultId = setTimeout(removeResult, 5000);

    $(".answerBtn").remove();
    $(".results").append('<h3 class="times_up">' + "Time's Up!" + '</h3>');
    $(".results").append('<p class="answer">' + 'The Answer Was: ' + Object.values(trivia.answers)[trivia.currentSet] + '</p>');
    // random timesUp gif
    $(".gif").append(trivia.timesUpGifs[random]);

  }

  // if there are no more questions left to ask
  else if (trivia.currentSet === Object.keys(trivia.questions).length) {
    // show the final result score
    $(".final-score")
      .html("<h3>All done, here's how you did!</h3>" + 
      '<p class="result_score">Total correct answers: ' + trivia.correct + '</p>' +
      '<p class="result_score">Total inccorect answers: ' + trivia.incorrect + '</p>' +
      '<p class="result_score">Total unasnwered questions: ' + trivia.unanswered + '</p>');

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

function guessChecker() {
  // the answer to the current question being asked
  var currentAnswer = Object.values(trivia.answers)[trivia.currentSet]
  // random number between 0 to trivia.wrongGifs array's length -1
  var random = Math.floor(Math.random() * (trivia.wrongGifs).length);

  // if the button clicked is equal to the answer of the currentSet, show correct message and gif and run removeResult after 3 sec (setTimeout) to move to next question.
  if ($(this).text() === currentAnswer) {
    
    // increment correct counter
    trivia.correct++;
    // stop question timer
    clearInterval(trivia.timerId);
    //run removeResult for 3 sec to the result info
    resultId = setTimeout(removeResult, 5000);

    $(".answerBtn").remove();
    $(".results").append('<h3 class="correct">' + "Correct Answer!" + '</h3>');
    $(".results").append('<p class="answer">' + 'The Answer Was: ' + currentAnswer + '</p>');
    $(".gif").append('<img src='+Object.values(trivia.correctGifs)[trivia.currentSet] +' class="result_gif">')
  } else {
    trivia.incorrect++;
    // stop question timer
    clearInterval(trivia.timerId);
    //run removeResult for 3 sec to the result info
    resultId = setTimeout(removeResult, 5000);

    $(".answerBtn").remove();
    $(".results").append('<h3 class="incorrect">' + "Wrong Answer!" + '</h3>');
    $(".results").append('<p class="answer">' + 'The Answer Was: ' + currentAnswer + '</p>');
    // random wrong gif
    $(".gif").append(trivia.wrongGifs[random]);
  }
}



