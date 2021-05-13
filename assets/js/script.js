var quizQuestions = [
	{
		question: "Which event occurs when the user clicks on an HTML element?",
		answers: {
			a: 'onmouseover',
			b: 'onclick',
			c: 'onmouseclick',
            d: 'onchange'
		},
		correctAnswer: 'b'
	},
	{
		question: "Which operator is used to assign a value to a variable?",
		answers: {
			a: '*',
			b: '-',
			c: '=',
            d: 'x'
		},
		correctAnswer: 'c'
	},
    {
		question: "How do you round the number 8.15 to the nearest integer?",
		answers: {
			a: 'round(8.15)',
			b: 'Math.round(8.15)',
			c: 'Math.rnd(8.15)',
            d: 'rnd(8.15)'
		},
		correctAnswer: 'b'
	},
	{
		question: "How to write an IF statement in JavaScript?",
		answers: {
			a: 'if i = 7',
			b: 'if i = 7 then',
			c: 'if i == 7 then',
            d: 'if (i == 7)'
		},
		correctAnswer: 'd'
	},
    {
		question: "Inside which HTML element do we put the JavaScript?",
		answers: {
			a: '<script>',
			b: '<js>',
			c: '<javascript>',
            d: '<scripting>'
		},
		correctAnswer: 'a'
	},
	{
		question: "JavaScript is the same as Java.",
		answers: {
			a: 'true',
			b: 'false',
		},
		correctAnswer: 'b'
	},
    {
		question: "How do you create a function in JavaScript?",
		answers: {
			a: 'myFunction function{}',
			b: 'function:myFunction()',
			c: 'function = myFunction()',
            d: 'function myFunction()'
		},
		correctAnswer: 'd'
	},
	{
		question: "JavaScript is not case-sensitive?",
		answers: {
			a: 'true',
			b: 'false',
		},
		correctAnswer: 'b'
	}
];




let buttonEl = document.querySelector(".start-btn");

buttonEl.addEventListener("click", countdownTimer);
