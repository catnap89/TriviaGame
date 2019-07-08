# TriviaGame

## Overview

**Worlf of Warcraft Trivia!** is a game where the player answers an interesting but unimportant questions about the popular MMORPG game "World of Warcraft". Once the game start, a trivia question about "World of Warcraft" and four buttons with answer choices will be displayed. The player should click one of the four buttons that appears to be the correct answer to the question.

## How To Play

### When website is loaded
  * Title and Start button is displayed. Click on the start button to start the game.

### When the Start button is clicked
  * Below game features will be displayed
    * Time Remaining: 10 Seconds  
    * Trivia Question about "World of Warcraft"
    * 4 buttons with answer options
  * Every second, the **timer will decrease** by one second.
  * Read the question and click one of the four buttons that appears to be the correct answer to the question.

### When one of the answer buttons are clicked
  * If the answer is correct:
    * The timer stops but still displays the Time Remaining to show the player how close it was till the timer reaches zero.
    * The player will see below features for 5 seconds.
      * Correct Answer!
      * The answer was:
      * GIF related to the correct answer
    * After 5 seconds, the game will **reset the timer** and generate **new question and buttons** with answer options.

  * If the answer is incorrect:
    * The timer stops but still displays the Time Remaining to show the player how close it was till the timer reaches zero.
    * The player will see below features for 5 seconds.
      * Wrong Answer!
      * The answer was:
      * Random GIF about wrong answer.
    * After 5 seconds, the game will **reset the timer** and generate **new question and buttons** with answer options.
  
  * If the timer reaches 0 before player answers the question:
    * Time Remaining stops at 0 and displayed, showing the player that the timer has reached zero.
    * The player will see below features for 5 seconds.
      * Time's Up!
      * The answer was:
      * Random Time's up GIF
    * After 5 seconds, the game will **reset the timer** and generate **new question and buttons** with answer options.

### Aftrer last question
  * Player will see below **final result (score) message**.
    * All done, here's how you did!
    * The counter showing how many questions the user has answered correct, incorrect or unanswered.
      * Correct answers:
      * Incorrect answers:
      * Unanswered: 
  * Start Over? button is displayed at the bottom. The player can **click the button to restart the game**.

### When Start Over button is clicked
  * It basically resets and start the game again.

