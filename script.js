const quizData = [
  {
    module: "Cardiologie", // Nouveau !
    question: "Quelle est la fonction du ventricule gauche ?",
    options: ["...", "...", "..."],
    correctAnswer: 2
  },
  {
    module: "Neurologie", // Nouveau !
    question: "Qu'est-ce qu'un neurone ?",
    options: ["...", "...", "..."],
    correctAnswer: 0
  }
];
const quizData = [
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5"],
    correct: 1
  }
    {
    question: "2 + 2 = ?",
    options: ["3", "4", "5"],
    correct: 1
  }
  // Ajoutez vos questions ici
];

let currentQuestion = 0;
const quizDiv = document.getElementById("quiz");

function showQuestion() {
  const q = quizData[currentQuestion];
  quizDiv.innerHTML = `
    <h2>${q.question}</h2>
    ${q.options.map((option, index) => `
      <button onclick="checkAnswer(${index})">${option}</button>
    `).join('')}
  `;
}

function checkAnswer(answerIndex) {
  if (answerIndex === quizData[currentQuestion].correct) {
    alert("Correct !");
  } else {
    alert("Faux !");
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) showQuestion();
}

showQuestion();
let filteredQuestions = [];

function startQuiz() {
  const selectedModule = document.getElementById("module-list").value;
  filteredQuestions = quizData.filter(q => q.module === selectedModule);
  
  document.getElementById("module-selector").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const question = filteredQuestions[currentQuestion];
  let html = `<h2>${question.question}</h2>`;
  
  question.options.forEach((option, index) => {
    html += `<button onclick="checkAnswer(${index})">${option}</button>`;
  });
  
  document.getElementById("quiz-container").innerHTML = html;
}
