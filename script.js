//Quiz App JS
const quizData = [
    {
        question: "How many times India has solely gotten into war after Independence ?",
        a: '2',
        b: '3',
        c: '4',
        d: '5+',
        correct: 'd'
    },
    {
        question: "When was the Kargil war fought ?",
        a: '1965',
        b: '1971',
        c: '1989',
        d: '1999',
        correct: 'd'
    },
    {
        question: "When was Pakistan got seprated from India ?",
        a: '1946',
        b: '1947',
        c: '1948',
        d: '1949',
        correct: 'b'
    },
    {
        question: "When was Bangladesh declared as a seprate Nation ?",
        a: '1965',
        b: '1974',
        c: '1971',
        d: '1984',
        correct: 'c'
    },
    {
        question: "India conducted it's first successful Nuclear test in which year ?",
        a: '1968',
        b: '1970',
        c: '1972',
        d: '1974',
        correct: 'd'
    }
    
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // Checking the Answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = 
               `<h2>Well Done! You have answered ${score}/${quizData.length} questions correctly.</h2>
                <button onclick="location.reload()" class="pushable">
                <span class="front">Reload</span>
                </button>`;
        }
    }
});
