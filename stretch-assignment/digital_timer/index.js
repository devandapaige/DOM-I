/* ## Project Description
 You will be making a timer that:
  * Counts up to 10 seconds
  * Increments every 10 ms
  * Has digits change to red when it gets to 10 seconds
  * Should not count past 10 seconds */

//setInterval works with ms, 10s = 10,000ms

const digits = document.querySelector(".digits");
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const msOnes = document.getElementById("msOnes");

/* ## Stretch On The Stretch!
  If you compelete the timer with time to spare:
  * Self study and research DOM `events` and `event listeners`
  * SG1: Implement a start button. The digital timer should not start until the button is pressed.
  * SG2: Once you have a start button working, configure it so that when a user presses the start button it is disabled and not enabled until the timer finishes.
  * SG3: Once you have finished SG2, add new new button called `reset` that resets the timer to 0:00:00 and then pressing the start button again will start the timer from 0.
  * SG4: Finally, if you have completed all the stretch goals, spend some time styling your timer and buttons. */
