//////////// BASIC CONSOLE QUIZ /////////////
// NB: Type "exit" to quit

var question1, question2, question3, questions, randomNumber, chooseQuestion, questionAnswer

function Question(question, answers, answer) {
    this.question = question;
    this.answers = answers;
    this.answer = answer;
}

question1 = new Question("What colour is an orange?", ["0. Red", "1. Green", "2. Orange"], 2);
question2 = new Question("What colour is an apple?", ["0. Red", "1. Green", "2. Orange"], 1);
question3 = new Question("What colour is a tomato?", ["0. Red", "1. Green", "2. Orange"], 0);

questionsArray = [question1, question2, question3];

randomNumber = (Math.floor(Math.random() * 3));

chooseQuestion = questionsArray[randomNumber].question;
chooseAnswer = questionsArray[randomNumber].answers;

console.log(chooseQuestion);

for (i = 0; i < 3; i++) {
    console.log(chooseAnswer[i]);
}

var userInput = prompt("Type the number relating to your answer:");

console.log(questionsArray[randomNumber].answer);

if (userInput == questionsArray[randomNumber].answer) {
    console.log("Correct");
} else {
    console.log("Wrong");
};


// var lastName = prompt("What is his last name?");
// console.log(firstName + " " + lastName);







