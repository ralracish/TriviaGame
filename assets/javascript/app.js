var pageArray = [
  {
    question: "What type of money would you spend in Germany?",
    answerArray: ["Yen", "Deutsche Marks", "Pounds", "Euros"],
    rightAnswer: "Euros",
    image: "https://gph.is/2d7mb4z..TriviaGame/assets/images/Euro.jpg",
  },
  {
    question: "What river runs through Paris?",
    answerArray: ["The Seine", "River Thames", "The Danube", "The Amstel"],
    rightAnswer: "The Seine",
    image: "https://gph.is/1Cry890",
  },
  {
    question: "In what country is The Great Wall?",
    answerArray: ["Spain", "China", "Argentina", "Canada"],
    rightAnswer: "China",
    image: "https://gph.is/1bOYreF",
  },
  {
    question: "In what US state is the Grand Canyon?",
    answerArray: ["New Mexico", "Arizona", "California", "Nevada"],
    rightAnswer: "Arizona",
    image: "https://gph.is/2aNdFUo",
  }, {
    question: "In 1976, Saigon changed its name to …?",
    answerArray: ["Ho Chi Minh City", "Pattaya", "Saigon City", "Hanoi"],
    rightAnswer: "Ho Chi Minh City",
    image: "https://gph.is/2KtoP3X",
  },
  {
    question: "What is the largest waterfall in the world?",
    answerArray: ["Niagara Falls", "Victoria Falls", "Linville Falls", "Yosemite Falls"],
    rightAnswer: "Victoria Falls",
    image: "http://gph.is/2oXgQBT",
  },
  {
    question: "Where are the pyramids of the sun and the moon?",
    answerArray: ["Mexico", "Japan", "Zimbabwe", "Peru"],
    rightAnswer: "Mexico",
    image: "https://gph.is/2bQ7LmI",
  },
  {
    question: "What canal connects the Mediterranean with the Red Sea?",
    answerArray: ["Karakum Canal", "Kiel Canal", "Suez Canal", "Panama Canal"],
    rightAnswer: "Suez Canal",
    image: "https://gph.is/1WmOuf8",
  },
  {
    question: "What is the world's busiest airport?",
    answerArray: ["Hartsfield-Jackson Atlanta", "JFK New York", "Beijing Capital International", "Dubai International"],
    rightAnswer: "Hartsfield-Jackson Atlanta",
    image: "https://gph.is/1eLpJRZ",
  },
  {
    question: "Where was the tv show Game of Thrones filmed?",
    answerArray: ["Nassau, Bahamas", "Grand Cayman, Cayman Islands", "Dubrovnik, Croatia", "Philipsburg, St. Maarten / St. Martin"],
    rightAnswer: "Dubrovnik, Croatia",
    image: "http://gph.is/2qSjUlz",
  }
]
$(document).ready(function () {


  var correctAnswerCounter = 0
  var incorrectAnswerCounter = 0;
  var userChoice = [];
  var counter = 0;
  var timer;

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
    rightAnswer = newPage.rightAnswer
    console.log(rightAnswer)
  }
  function setTimer() {
    console.log('setTimeout being set');
    return setTimeout(changePage, 2000)
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
    console.log(pageArray.length);
    console.log(counter);
    // if we reach limit
    if (counter == pageArray.length) {
      setTimeout(end, 2000);
    } else {
      var newPage = pageArray[counter];
      var question = newPage.question;
      questionDiv.text(question);
      console.log(question);
      for (i = 0; i < newPage.answerArray.length; i++) {
        answer.append("<li class='userChoice'>" + newPage.answerArray[i] + "</li>");
        rightAnswer = newPage.rightAnswer
      }
    }
  }

  function end() {
    var answerDiv = $("#message")
    answerDiv.empty();
    var timerDiv = $("#timer");
    timerDiv.empty();
    const doneText = $('<p>');
    doneText.html('Here is your score: ' + '<br>' + 'Correct Answers: = ' + correctAnswerCounter + '<br>' +
      'Incorrect Answers: = ' + incorrectAnswerCounter);
    $("#message").append(doneText);
    $("message").css("color", "red");
    clearInterval(intervalId);
  }

  $("#answers").on("click", "li", function () {
    $(this).css({ backgroundColor: 'red', color: 'white' });
    userChoice = ($(this).text());
    console.log(userChoice);
    answerPage()
  });

  function answerPage() {
    var questionDiv = $("#question");
    var answer = $("#answers");
    questionDiv.empty();
    answer.empty();
    if (userChoice == rightAnswer) {
      console.log(rightAnswer)
      correctAnswerCounter++;
      console.log(correctAnswerCounter);
      $("#message").text("You picked the right answer! " + rightAnswer);
      $(this).css({ "color": "red" });
      var newPage = pageArray[counter];
      var img = newPage.image
      var div = document.getElementById('img');
      img.onload = function () {
        div.appendChild(img);
      };
      stop()
      setTimer();
    }
    else if (userChoice !== rightAnswer) {
      incorrectAnswerCounter++
      $("#message").text("No. That's not right." +
        "The correct answer is " + rightAnswer + ".");
      stop();
      setTimer();
    }
  }
  var number = 10;
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
    number = 10;
  }
});

