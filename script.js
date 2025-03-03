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
