const questions = [
    {
        "question": "Who was responsible for unifying Germany in the late 19th century?",
        "answers": [
            { "text": "Victor Emmanuel II", "correct": false },
            { "text": "Otto von Bismarck", "correct": true },
            { "text": "Count Cavour", "correct": false },
            { "text": "Napoleon Bonaparte", "correct": false }
        ]
    },
    {
        "question": "What did the Civil Code of 1804 in France establish?",
        "answers": [
            { "text": "A unified legal code", "correct": true },
            { "text": "A new monarchy", "correct": false },
            { "text": "The independence of French colonies", "correct": false },
            { "text": "Universal suffrage", "correct": false }
        ]
    },
    {
        "question": "The term 'Nation-State' refers to:",
        "answers": [
            { "text": "A country ruled by a monarchy", "correct": false },
            { "text": "A state where people share a common identity and history", "correct": true },
            { "text": "A region ruled by multiple leaders", "correct": false },
            { "text": "An economic union of states", "correct": false }
        ]
    },
    {
        "question": "Which revolution is known for spreading the ideals of liberty, equality, and fraternity in Europe?",
        "answers": [
            { "text": "Industrial Revolution", "correct": false },
            { "text": "French Revolution", "correct": true },
            { "text": "Russian Revolution", "correct": false },
            { "text": "American Revolution", "correct": false }
        ]
    },
    {
        "question": "The 1830 July Revolution in France resulted in the overthrow of which monarch?",
        "answers": [
            { "text": "Louis XVI", "correct": false },
            { "text": "Napoleon Bonaparte", "correct": false },
            { "text": "Charles X", "correct": true },
            { "text": "Louis Philippe", "correct": false }
        ]
    },
    {
        "question": "Which of the following best describes ‘Liberalism’ in 19th-century Europe?",
        "answers": [
            { "text": "Monarchical control and conservatism", "correct": false },
            { "text": "Freedom for individuals and equality before the law", "correct": true },
            { "text": "Expansion of colonial empires", "correct": false },
            { "text": "Economic self-sufficiency", "correct": false }
        ]
    },
    {
        "question": "The Frankfurt Parliament of 1848 aimed to establish:",
        "answers": [
            { "text": "A monarchy in Germany", "correct": false },
            { "text": "A unified, democratic Germany", "correct": true },
            { "text": "A military alliance among German states", "correct": false },
            { "text": "An independent German colony", "correct": false }
        ]
    },
    {
        "question": "Which of these played a key role in spreading nationalist ideas across Europe?",
        "answers": [
            { "text": "The church", "correct": false },
            { "text": "Napoleonic wars and conquests", "correct": true },
            { "text": "Colonialism", "correct": false },
            { "text": "Industrialization", "correct": false }
        ]
    },
    {
        "question": "Giuseppe Mazzini founded which organization aimed at achieving Italian unification?",
        "answers": [
            { "text": "Carbonari", "correct": false },
            { "text": "Young Italy", "correct": true },
            { "text": "The Red Shirts", "correct": false },
            { "text": "Young Europe", "correct": false }
        ]
    },
    {
        "question": "Who led the movement to unify Italy from the South?",
        "answers": [
            { "text": "Victor Emmanuel II", "correct": false },
            { "text": "Count Cavour", "correct": false },
            { "text": "Giuseppe Garibaldi", "correct": true },
            { "text": "Napoleon III", "correct": false }
        ]
    },
    {
        "question": "Which event led to the downfall of the Metternich system in Europe?",
        "answers": [
            { "text": "The July Revolution of 1830", "correct": false },
            { "text": "The Revolutions of 1848", "correct": true },
            { "text": "The Congress of Vienna", "correct": false },
            { "text": "The Industrial Revolution", "correct": false }
        ]
    },
    {
        "question": "The term 'Romanticism' in European history refers to:",
        "answers": [
            { "text": "A political movement", "correct": false },
            { "text": "An artistic and cultural movement", "correct": true },
            { "text": "A military alliance", "correct": false },
            { "text": "A religious reform movement", "correct": false }
        ]
    },
    {
        "question": "In the early 19th century, ‘conservatism’ in Europe was in favor of:",
        "answers": [
            { "text": "Democracy and liberalism", "correct": false },
            { "text": "Traditional institutions and monarchy", "correct": true },
            { "text": "National independence movements", "correct": false },
            { "text": "Complete economic freedom", "correct": false }
        ]
    },
    {
        "question": "Which of the following best describes the impact of the Treaty of Vienna (1815) on Europe?",
        "answers": [
            { "text": "It promoted liberal ideas", "correct": false },
            { "text": "It restored the monarchy and redrew the European map", "correct": true },
            { "text": "It abolished the monarchy", "correct": false },
            { "text": "It encouraged industrialization", "correct": false }
        ]
    },
    {
        "question": "Which of the following groups led the revolutions in Europe in 1848?",
        "answers": [
            { "text": "Nobles and aristocrats", "correct": false },
            { "text": "Middle-class liberals and workers", "correct": true },
            { "text": "The military", "correct": false },
            { "text": "Monarchs", "correct": false }
        ]
    },
    {
        "question": "What does the term 'absolutist' refer to?",
        "answers": [
            { "text": "A government system with centralized and authoritarian control", "correct": true },
            { "text": "A decentralized government with regional autonomy", "correct": false },
            { "text": "A government that operates under a constitution", "correct": false },
            { "text": "A form of government supporting universal suffrage", "correct": false }
        ]
    },
    {
        "question": "What did the term 'Das Volk' mean in the context of German nationalism?",
        "answers": [
            { "text": "A form of art", "correct": false },
            { "text": "The people", "correct": true },
            { "text": "An economic ideology", "correct": false },
            { "text": "A German military force", "correct": false }
        ]
    },
    {
        "question": "The painting ‘Germania’ created by Philip Veit symbolized:",
        "answers": [
            { "text": "German unity and freedom", "correct": true },
            { "text": "The victory of France", "correct": false },
            { "text": "The defeat of Napoleon", "correct": false },
            { "text": "Italian independence", "correct": false }
        ]
    },
    {
        "question": "The idea of 'Europe as a Nation' was inspired by the French Revolution and spread through:",
        "answers": [
            { "text": "Napoleon's conquests", "correct": true },
            { "text": "Colonialism", "correct": false },
            { "text": "The Treaty of Vienna", "correct": false },
            { "text": "The Renaissance", "correct": false }
        ]
    },
    {
        "question": "Which of the following symbols in the painting ‘Germania’ represented strength and heroism?",
        "answers": [
            { "text": "The crown of oak leaves", "correct": true },
            { "text": "The broken chains", "correct": false },
            { "text": "The black, red, and gold flag", "correct": false },
            { "text": "The olive branch", "correct": false }
        ]
    }
    
];


//[
//     {
//         question: "Which is largest animal in the world?",
//         answers: [
//             { text: "Blue Whale", correct: true },
//             { text: "Elephant", correct: false },
//             { text: "Giraffe", correct: false },
//             { text: "Rhino", correct: false }
//         ]
//     },
//     {
//         question: "Which is largest animal in the world?",
//         answers: [
//             { text: "Blue Whale", correct: true },
//             { text: "Elephant", correct: false },
//             { text: "Giraffe", correct: false },
//             { text: "Rhino", correct: false }
//         ]  
//     },
//     {
//         question: "Which is largest animal in the world?",
//         answers: [
//             { text: "Blue Whale", correct: true },
//             { text: "Elephant", correct: false },
//             { text: "Giraffe", correct: false },
//             { text: "Rhino", correct: false }
//         ]
//     },
//     {
//         question: "Which is largest animal in the world?",
//         answers: [
//             { text: "Blue Whale", correct: true },
//             { text: "Elephant", correct: false },
//             { text: "Giraffe", correct: false },
//             { text: "Rhino", correct: false }
//         ]
//     }
// ];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;

    } else {
        selectedBtn.classList.add("incorrect");
 } 
 Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true") { 
        button.classList.add("correct");  
}
  button.disabled = true;
});
nextButton.style.display = "block";
 }
 
 function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
 }

 function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
 }
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

 startQuiz();
