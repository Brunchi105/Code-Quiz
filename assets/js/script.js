let score = 0;
let timeLeft = 50;
const timePenalty = -5;


let currentQuestion = 0;

// created array of objects
var quizQuestions = [
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
        question: "Inside which HTML element do we put the JavaScript?",
            a: '<script>',
            b: '<js>',
            c: '<javascript>',
            d: '<scripting>',
        answer: 'a'
    },
    {
        question: "How do you create a function in JavaScript?",
            a: 'myFunction function{}',
            b: 'function:myFunction()',
            c: 'function = myFunction()',
            d: 'function myFunction()',
        answer: 'd'
    },
];


var finalQuestionIndex = quizQuestions.length -1;
var currentQuestionIndex = 0;
var questionsEl = document.getElementById("question");
let startQuizEl = document.querySelector("#start-btn");
let containerEl = document.querySelector(".container");
let modalEl = document.querySelector(".modal");
let timerEl = document.querySelector("#timer");
var choiceOptionA = document.querySelector(".a");
var choiceOptionB = document.querySelector(".b");
var choiceOptionC = document.querySelector(".c");
var choiceOptionD = document.querySelector(".d");

function startQuiz() {
    // hides homepage & displays quiz
    modalEl.setAttribute("class", "hide");
    containerEl.removeAttribute("class", "hide");
    countdowmTimer();
    showQuestion();

};

function showQuestion() {
    if (currentQuestionIndex === finalQuestionIndex) {
        return userScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<h2>" + currentQuestion.question + "</h2>";
    choiceOptionA.innerHTML = currentQuestion.a;
    choiceOptionB.innerHTML = currentQuestion.b;
    choiceOptionC.innerHTML = currentQuestion.c;
    choiceOptionD.innerHTML = currentQuestion.d;

    choiceOptionA.addEventListener("click", nextQuestion);
};

function nextQuestion() {
currentQuestionIndex[1];
}



function countdowmTimer() {
    let timer = setInterval(function () {
       timerEl.textContent = timeLeft;
        if (timeLeft > 1) {
            timeLeft--;
        } else {
            clearInterval(timer);
            alert('Game Over!');
            userScore();
        }
    }, 1000);
};


// starts coding quiz
startQuizEl.addEventListener("click", startQuiz);
