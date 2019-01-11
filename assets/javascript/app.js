
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


var timer = 0;
var correctAnswer = 0
var incorrectAnswer = 0
var unanswered = 0
var userAnswer = ""
var currentQuestion = "";


$("#startBtn").click(function){ 
  run()
  $(this).hide();
}
//   playPage();
//   }); 

//   $('#startOverBtn').on('click', function(){
//     $(this).hide();
//     playPage();
//   });
// $("#doneBtn").on("click",function(){
//   $(this).hide();
//   playPage();
// }

//   // function playPage(){
//   // pageArray.forEach(function(element, index) {
//     // console.log('QUESTION ', element.question)
//   // element.answerArray.forEach(function(answer, i) {
//     // console.log('each answer ', answer)
//     // var div = document.createElement("div");
//     // div.innerHTML = question;
//     // documentGetElementById("question").appendChild(div);
//     // var div1 = document.createElement("div")
//     // div.innerHTML = answer;
//     // documentGetElementById("answers".appendChild(div1));

//   // })
// // });
//   // }

//   // function playPage(){
//     // timer();
//     pageArray.forEach(function(element, index){
//       console.log("Question", element.question);
//     element.answerArray.forEach(function(answer, i){
//       console.log(answer)
//     // })
//     })
// })
// playPage()
// function nextPage(){
  // run();

// }

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


});