
$(document).ready(function() {
    
var pageArray = [
   {
    "question": "What type of money would you spend in Germany?",
    "answerArray": ["Yen", "Deutsche Marks", "Pounds", "Euros"],
    "rightAnswer": 3,
    "image": "../assets/images/Euro.jpg"
    },
    
    {
    "question": "What river runs through Paris?",
    "answerArray": ["The Seine", "River Thames", "The Danube", "The Amstel"],
    "rightAnswer": 0,
    "image":"..assets/images/SeineRiver.jpg"
    },   

    {
    "question": "In what country is The Great Wall?",
    "answerArray": ["Spain", "China", "Argentina", "Canada"],
    "rightAnswer": 1,
    "image": "../assets/images/GreatWall.jpg"
    },

    {
    "question": "In what US state is the Grand Canyon?",
    "answerArray": ["New Mexico", "Arizona", "California", "Nevada"],
    "rightAnswer": 1,
    "image": "../assets/images/GrandCanyon.jpg"
    },

    {
    "question": "In 1976, Saigon changed its name to …?",
    "answerArray": ["Ho Chi Minh City", "Pattaya", "Saigon City", "Hanoi"],
    "rightAnswer": 0,
    "image": "../assets/images/GrandCanyon.jpg"
    }
]



var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var userAnswer = [];
var currentQuestion = 0;
var userChoice=false;


//Do I need to collect userAnswers into an array because I need to hold them somewhere?

//Start button should only be on first page, and when hit, timer starts and new page comes up
// $("#startBtn").click(function){ 
//   timer();
//   $(this).hide();
// }
//Create function for displaying questions with associated answers on the screen

// function displayquestions(){
//   loop through "question"
//   loop through "answerArray"
//   append BOTH to html, appending "answerArray" to a list tag in html
// }

// function selectAnswers(){
//Set userChoice = false?
//Create function for user to select answers which will then be correctAnswer, incorrectAnswer, or if no selection unanswered
//Mousover answerlist so the user can see which answer to pick, and add event listener to create userChoice variable?
//If user selects answer (userChoice) before timer=0 check to see if = rightAnswer. 
//If true, increase correctAnswer by 1 = correctAnswer++
  //Load page with message "That's correct" on html and show image
//If false, increase incorrectAnswer by 1 = incorrectAnswer++
  //Load page with message "No. The answer is "rightanswer"" on html and show image
//If user doesn't select answer before timer=0, 
  //Load page with message "Time's Up! The answer is "rightAnswer." and show the image on the HTML, increase unanswered by 1 = useranswer++

//If userChoice=true || userChoice=false || userChoice=unanswered

//Move to next page with new question and associated answers
  //timer should restart

//When last "question" and "answer" page has been displayed and answered

//Go to summary page, which will have 
  // "You have finished the quiz!"
    // "Correct Answers: " + correctAnswer counter
    // "Incorrect Answers: " + incorrectAnswer counter
    // "Unanswered Questions: " + unanswered counter;

//Create a reset button and function that will reset the game

// function timer(){
  var number = 15;
  var intervalId;
  function run() {
    if (!intervalId) {
      intervalId = setInterval(decrement, 1000);
    }
  }
  function decrement() {
    number--;
    $("#timer").html("<h2> Timer: " + number + "</h2>");
    if (number === 0) {
      stop();
      alert("Time Up!");
      // nextPage();
    }
  }
  function stop() {
    clearInterval(intervalId);
    intervalId = null
  }
  run();
// }


});