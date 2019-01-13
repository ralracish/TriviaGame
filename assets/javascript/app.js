var pageArray = [

  {
    question: "What type of money would you spend in Germany?",
    answerArray: ["Yen", "Deutsche Marks", "Pounds", "Euros"],
    rightAnswer: 3,
    image: "../assets/images/Euro.jpg"
  },
  {
    question: "What river runs through Paris?",
    answerArray: ["The Seine", "River Thames", "The Danube", "The Amstel"],
    rightAnswer: 0,
    image: "..assets/images/SeineRiver.jpg"
  },
  {
    question: "In what country is The Great Wall?",
    answerArray: ["Spain", "China", "Argentina", "Canada"],
    rightAnswer: 1,
    image: "../assets/images/GreatWall.jpg"
  },
  {
    question: "In what US state is the Grand Canyon?",
    answerArray: ["New Mexico", "Arizona", "California", "Nevada"],
    rightAnswer: 1,
    image: "../assets/images/GrandCanyon.jpg"
  }, {
    question: "In 1976, Saigon changed its name to …?",
    answerArray: ["Ho Chi Minh City", "Pattaya", "Saigon City", "Hanoi"],
    rightAnswer: 0,
    image: "../assets/images/GrandCanyon.jpg"
  }
]
$(document).ready(function () {



  var correctAnswerCounter = 0;
  var incorrectAnswerCounter = 0;
  var unanswered = 0;
  var userAnswer = [];
  var counter = 1;
  var currentQuestion = pageArray.question + counter;

  // game[key].someotherproperty;


  var counter = 0;
  var timer;
  // sets the initial button settings, using the counter and arr above  
  // function setButton() {
  //   const buttonSettings = contentArr[counter];
  //   const button = $('<button id=\'clicker\'>');
  //   button.text(buttonSettings.text);
  //   button.css('background-color', buttonSettings.colors[buttonSettings.rightColor])
  //   button.appendTo('#button-area');
  //   timer = setTimer();
  // }
  $("#startBtn").click(function () {
    $(this).hide();
    run();
    playPage();
  });

  function playPage() {
    var newPage = pageArray[counter];
    var question = newPage.question;
    var questionDiv = $("#question");
    questionDiv.text(question);
    console.log(question);
    var answer = $("#answers");
    for (i = 0; i < newPage.answerArray.length; i++) {
      answer.append("<li>" + newPage.answerArray[i] + "</li>");
    }
  }
  function setTimer() {
    console.log('setTimeout being set');
    return setTimeout(changePage, 5000)
  }

  function clearTimer() {
    clearTimeout(timer);
  }
  // same as setButton but only changes the button itself, since we don't need
  // to recreate the button
  function changePage() {
    var questionDiv = $("#question");
    var answer = $("#answers");
    questionDiv.empty()
    answer.empty();
    counter++;
    run();
    // if we reach limit
    if (counter >= pageArray.length) {
      end();
    } else {
      var newPage = pageArray[counter];
      var question = newPage.question;
      questionDiv.text(question);
      console.log(question);
      for (i = 0; i < newPage.answerArray.length; i++) {
        answer.append("<li class='userChoice'>" + newPage.answerArray[i] + "</li>");
        
      }
    }
  }

  function end() {
    $('#clicker').remove();
    const doneText = $('<p>');
    doneText.text('We reached the end');
    $('#button-area').append(doneText);
    clearInterval(intervalId);
  }

  $(document).on("click", ".userChoice", function(){
    $(this).css({backgroundColor: 'red', color:'white'});
  })
  $('#button-area').on('click', '#clicker', function (e) {
    e.preventDefault();
    console.log('clicker being called');

    changeButton();
  })
  

  $("#answers").on("click", "div", function (e) {
    userAnswer = ($(this).text());
    console.log(userAnswer);
    if (userAnswer == page[currentQuestion].rightAnswer) {
      console.log(page[currentQuestion].rightAnswer)
      correctAnswerCounter++;
      console.log(correctAnswerCounter);
      var div = document.getElementById("rightMessage");
      div.innerHTML += "You picked the right answer!";
      // reset();
    }
    // }
    // var img = document.createElement("img");
    // img.src = page.question1.image
    // src.appendChild(img);
    // reset();
    // }
    else if (userAnswer !== page[currentQuestion].rightAnswer) {
      incorrectAnswerCounter++
      var div2 = document.getElementById("wrongMessage");
      div2.innerHTML += "No. That's not right."
    }
  })



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
  var number = 5;
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
      alert("Times Up!");
      changePage();
    }
  }
  function stop() {
    clearInterval(intervalId);
    intervalId = null
    number=5;
  }

  // }


});

// var counter = 0;
// function showQ() {
//   const question = pageArray[0];

//   appendToDom(question)



//   //the user can click on something after appemdToDOm happens
//   // do work to display question on screen (reset function up there)
// }

// onClick () {
//   // if right, run increment right answers counter
//   // else increment wrong answers
//   // in both cases increment counter, and run showQ
// }

/*


*/