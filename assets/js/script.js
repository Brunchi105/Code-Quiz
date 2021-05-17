// created array of objects
var jsCodingQuiz = [
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        a: 'onmouseover',
        b: 'onclick',
        c: 'onmouseclick',
        d: 'onchange',
        answer: 'b'
    },
    {
        question: "Which operator is used to assign a value to a variable?",
            a: '*',
            b: '-',
            c: '=',
            d: 'x',
        answer: 'c'
    },
    {
        question: "How do you round the number 8.15 to the nearest integer?",
            a: 'round(8.15)',
            b: 'Math.round(8.15)',
            c: 'Math.rnd(8.15)',
            d: 'rnd(8.15)',
        answer: 'b'
    },
    {
        question: "How to write an IF statement in JavaScript?",
            a: 'if i = 7',
            b: 'if i = 7 then',
            c: 'if i == 7 then',
            d: 'if (i == 7)',
        answer: 'd'
    },
    {
        question: "How do you create a function in JavaScript?",
            a: 'myFunction function{}',
            b: 'function:myFunction()',
            c: 'function = myFunction()',
            d: 'function myFunction()',
        answer: 'd'
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
            a: 'script',
            b: 'js',
            c: 'javascript',
            d: 'scripting',
        answer: 'a'
    },
];

let score = 0;
let timeLeft = 30;
const timePenalty = 5;
var finalQuestionIndex = jsCodingQuiz.length;
var currentQuestionIndex = 0;
var questionsEl = document.getElementById("question");
let startQuizEl = document.querySelector("#start-btn");
let containerEl = document.querySelector(".container");
let modalEl = document.querySelector(".modal");
let timerEl = document.querySelector("#timer");
let gameOverEl = document.querySelector(".game-over");
let finalScoreEl = document.querySelector("#finalscore");
var choiceOptionA = document.querySelector("#a");
var choiceOptionB = document.querySelector("#b");
var choiceOptionC = document.querySelector("#c");
var choiceOptionD = document.querySelector("#d");
var correct;

var showQuestion = function () {
    if (currentQuestionIndex === finalQuestionIndex) {
        return userScore();
    } 
    var currentQuestion = jsCodingQuiz[currentQuestionIndex];
    questionsEl.innerHTML = "<h2>" + currentQuestion.question + "</h2>";
    choiceOptionA.innerHTML = currentQuestion.a;
    choiceOptionB.innerHTML = currentQuestion.b;
    choiceOptionC.innerHTML = currentQuestion.c;
    choiceOptionD.innerHTML = currentQuestion.d;
}       

function startQuiz() {
    // hides homepage & displays quiz
    modalEl.setAttribute("class", "hide");
    containerEl.removeAttribute("class", "hide");
    countdowmTimer();
    showQuestion();
};

function countdowmTimer() {
    let timer = setInterval(function () {
       timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft >= 0) {
            timeLeft--;
        } else {
            clearInterval(timer);
            alert('Game Over!');
            userScore();
        }
    }, 1000);
};



//displays quiz results & allows user to enter name
function userScore() {
    containerEl.setAttribute("class", "hide");
    gameOverEl.removeAttribute("class", "hide");
    finalScoreEl.textContent = "Thank you for playing. Your score is " + score + ".";
};

function compareAnswer(answer) {
    correct = jsCodingQuiz[currentQuestionIndex].answer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("Correct!");
        currentQuestionIndex++;
        showQuestion();
    } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        // If incorrect, subtract 5sec from timer
        timeLeft = timeLeft - timePenalty;
        alert("Incorrect!")
        currentQuestionIndex++;     
        showQuestion();
    } else {
        userScore();
    };
};

// starts coding quiz
startQuizEl.addEventListener("click", startQuiz);
