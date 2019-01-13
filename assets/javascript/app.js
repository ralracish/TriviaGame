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



  var rightAnswer = pageArray.rightAnswer
  var correctAnswerCounter = rightAnswer + 1
  var incorrectAnswerCounter = 0;
  var unanswered = 0;
  var userAnswer = [];
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
    const doneText = $('<p>');
    doneText.text('We reached the end:' +
      'Correct Answers: ' + '=' + correctAnswerCounter +
      'Incorrect Answers: ' + '=' + incorrectAnswerCounter);
    clearInterval(intervalId);
  }

  $("#answers").on("click", "li", function () {
    userChoice = ($(this).text());
    // console.log(userChoice);
    answerPage()
  });

  function answerPage() {
    var questionDiv = $("#question");
    var answer = $("#answers");
    questionDiv.empty()
    answer.empty();
    if (userChoice == rightAnswer) {
      console.log(rightAnswer)
      correctAnswerCounter++;
      console.log(correctAnswerCounter);
      var div = document.getElementById("rightMessage");
      div.innerHTML += "You picked the right answer!" + rightAnswer;
      // var img = document.createElement("img");
      // img.src = question.image
      // src.appendChild(img);
      stop()
      changePage();
    }
    else if (userAnswer !== pageArray.rightAnswer) {
      incorrectAnswerCounter++
      var div2 = document.getElementById("wrongMessage");
      div2.innerHTML += "No. That's not right." +
        "The correct answer is " + pageArray.rightAnswer + ".";
      // var img = document.createElement("img");
      // img.src = question.image
      // src.appendChild(img);
      stop();
      changePage();
    }
  }
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
    number = 5;
  }
});

