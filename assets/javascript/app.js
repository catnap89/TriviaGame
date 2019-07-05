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



$(".start-button").on("click", startGame);  // Clicking START button triggers startGame function
$(document).on('click' , '.answerBtn', guessChecker);


// Functions
// =============================================================================

var trivia = {
  // trivia properties
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  currentSet: 0,
  timer: 20,
  timerId: "",
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

  }

}



























// For when the start button is clicked.
// function startGame() {
  
//   // Reset counters
//   correctCounter = 0;
//   incorrectCounter = 0;
//   unansweredCounter = 0;
 
//   // Hide start button and show game-contents
//   $(".start-button").hide();
//   $(".game-contents").show();
  
//   startTimer();

//   // Display Question
//   nextQuestion(); // this is first question when the start button is clicked, how do we move to result and to second question?
  
// }

// // For Timer
// function startTimer() {

//   clearInterval(intervalId);
//   intervalId = setInterval(decrement, 1000);
// } 

// function decrement() {

//   timer--;

//   $(".timer").html("<h3 class='timer'>" + "Time Remaining: " + timer + " Seconds" + "</h3>");

//   if (timer === 0) {

//     stopTimer();

//     // display times up
//     timeup();
//   }
// }

// function stopTimer() {
//   clearInterval(intervalId);
// }

// // for questions
// var answerBtn = $(".answerBtn");

// var myQuestions = [
  
//   {
//     question: "What is 1+1?",
//     answers: ["3", "0", "1", "2"],    
//     correct: function() {
//       return this.answers[3]
//     }
//   },
//   {
//     question: "What is 2 x 2?",
//     answers: ["4", "2", "22", "0"],
//     correct: function() {
//       return this.answers[0]
//     }
//   },
//   {
//     question: "Hyper Text Markup Language is also known as___",
//     answers: ["CSS", "JavaScript", "HTML", "jQuery"],
//     correct: function() {
//       return this.answers[2]
//     }
//   },
//   {
//     question: "What is Walmart's highest selling product of all time?",
//     answers: ["Bottled Water", "Coke", "Toilet Paper", "Bananas"],
//     correct: function() {
//       return this.answers[3]
//     }
//   },

// ];
//   var questionOption = Object.value(myQuestions.question)[0];
//   $('#question').text(questionOption);
//   console.log(questionOption);


// console.log(myQuestions[0])
// console.log(myQuestions[0].question) // What is 1+1?
// console.log(myQuestions[0].correct())
// console.log(myQuestions[1].correct())

/*
1. loop through the my Questions obj.
2. push the questions to questionArry.
3. Display questions in order when the start button is clicked and after result 
4. Display answers of the question inside answerbuttons
5. When the answerBtns are clicked, show result for 5 seconds
  1. if answerBtn clicked === correctAnswer, show correct messege.
  2. if answerBtn clicked !=== correctAnswer, show incorrect message.
  3. if timeout, show timeout message
6. After 5 seconds of the result, show next question and the answers of the question

*/

// var correctAnswer = [myQuestions[0].correct(), myQuestions[1].correct(), myQuestions[2].correct(), myQuestions[3].correct()]  


// If this is added to startGame function, which is triggered when start button is clicked, it should display next(first) question.
// If this is added after result function then it should display next question after result.
// Have result with timer and when timer === 0, trigger nextQuestion.
// Result fucntion triggered when user click answerBtn.



// var questionArry = [];

//   for (var i = 0; i < myQuestions.length; i++) {
//     questionArry.push(myQuestions[i].question);
//   }



  
  
//   console.log(questionArry);
  
// function questionLists() {
  

//   // if($(".start-button").on("click", ))
// }


// function nextQuestion() {
//   $(".question").text(questionArry[i].question);
// }



// $("#a").text(myQuestions[0].answers[0])  // myquestion[0] -> myQuestion[1] after result page.. HOW??
// $("#b").text(myQuestions[0].answers[1])
// $("#c").text(myQuestions[0].answers[2])
// $("#d").text(myQuestions[0].answers[3])

// // alert($('.answerBtn').on("click", text()))

// var results = $(".results")
// var showResults;


// // Use timer to show this until timer === 0 , set the timer for 5 sec
// showResults = function() {

//   // if correct, display correct message and gif
//   if (buttonClicked === myQuestions[i].correct)
//   results.text("Correct")
//   results.text("Correct Answer Was: " + questions.answer)
//   // else incorrect, display incorrect message and gif
//   // After 5 seconds, display nextQuestion
// }






