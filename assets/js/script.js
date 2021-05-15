let score = 0;
let timeLeft = 50;
const timePenalty = -5;

// create array for questions & answers
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
let startQuizEl = document.querySelector("#start-btn");
let containerEl = document.querySelector(".container");
let modalEl = document.querySelector(".modal");
let timerEl = document.querySelector("#timer");

function countdowmTimer() {
    let timer = setInterval(function () {
       timerEl.textContent = timeLeft;
        if (timeLeft > 1) {
            timeLeft--;
        } else {
            clearInterval(timer);
            alert('Game Over!');
        }
    }, 1000);
}


function showQuestion() {
    quizQuestions.forEach(element => console.log(element.question));
}


function startQuiz() {
    modalEl.setAttribute("class", "hide")
    containerEl.removeAttribute("class", "hide")
    countdowmTimer();
    showQuestion();

}



// starts coding quiz
startQuizEl.addEventListener("click", startQuiz);
