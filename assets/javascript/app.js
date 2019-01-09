
//Create Start function for start button
//Figure out how to change part of the screen for questions and answers
//Create a timer for each question
//

var pages = {
    page1: {
    "question": "What type of money would you spend in Germany?",
    "answerArr": ["Yen", "Deutsche Marks", "Pounds", "Euros"],
    "answer": "Euros"
    },
    
    page2: {
    "question": "What river runs through Paris?",
    "answerArr": ["The Seine", "River Thames", "The Danube", "The Amstel"],
    "answer": "The Seine"
    },   

    page3: {
    "question": "In what country is The Great Wall?",
    "answerArr": ["Spain", "China", "Argentina", "Canada"],
    "answer": "China"
    },

    page4: {
    "question": "In what US state is the Grand Canyon?",
    "answerArr": ["New Mexico", "Arizona", "California", "Nevada"],
    "answer": "Arizona"
    },

    page5: {
    "question": "In 1976, Saigon changed its name to …?",
    "answerArr": ["Ho Chi Minh City", "Pattaya", "Saigon City", "Hanoi"],
    "answer": "Ho Chi Minh City"
    }
}

//Create function to start game
// const button = document.querySelector('button');

// button.addEventListener('click', playPage)

// function playPage(){
    // for (var i = 0; i < pages.length; i++) {
        // for (var j = 0; j < pages[i].length; j++) {
        //   console.log(pages[i][j]);
        // }
    //   }
      
    //display first page with question and then answers
// Object.keys(pages).forEach(function(key){
    // console.log(key,pages[key]);
// });
function createPages(page){
    var newDiv = $("<div>")
    newDiv.attr("id",pages) 
    var firstP = $("<p>");
    firstP.text(pages.page1.question);
    newDiv.append(firstP);
}

createPages(){
console.log(createPages)
}
//create a function to display questions and then answerArr and push to Div="page" 