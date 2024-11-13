const questions = [
  {
    question: "At what age is a person considered an adult in Nigeria?",
    options: ["18", "30", "20", "60"],
    correct: "18",
  },
  {
    question: "What are the colour spectrums?",
    options: [
      "Black, white, gray",
      "Red, yellow, blue",
      "Red, green, blue",
      "None of the above",
    ],
    correct: "Red, green, blue",
  },
  {
    question: "What is 6+6X2?",
    options: ["24", "18", "20", "None of the above"],
    correct: "18",
  },
  {
    question: "Who is the president of Nigeria?",
    options: ["Buhari", "Obasanjo", "Tinubu", "I don't know"],
    correct: "Tinubu",
  },
];
let currentIndex = 0;
const lastIndex = questions.length - 1;
const questionsContainer = document.getElementById("questions");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("prev");
const timer = document.getElementById("timer");
let time = 60;
let score = 0;

const displayQuestions = () => {
  if (currentIndex < questions.length) {
    questionsContainer.innerHTML = `<p>Question ${currentIndex + 1}</p> <h3>${
      questions[currentIndex].question
    }</h3>`;
    optionsContainer.innerHTML = questions[currentIndex].options
      .map((option, index) => {
        `<div class="quiz-option">
          <input type="radio" id="option${
            index + 1
          }" name="answer" value="${option}"> 
          <label for="option${index + 1}">${option}</label>
        </div>`;
      })
      .join("");
  } else {
    showResult();
  }
};

const showResult = () => {
  timer.innerText = "00:00";
  clearInterval(timerInterval);

  optionsContainer.innerHTML = "";
  nextBtn.style.visibility = "hidden";
  previousBtn.style.visibility = "hidden";
  questionsContainer.innerHTML = `<h1>You Scored ${score}/${questions.length}</h1>`;
};

nextBtn.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    if (selectedOption.value === questions[currentIndex].correct) {
      score++;
    }
    currentIndex++;
    displayQuestions();
  } else {
    alert("Please select an option");
  }
});

previousBtn.addEventListener("click", () => {
  currentIndex--;
  displayQuestions();
});

displayQuestions();

const timerInterval = setInterval(() => {
  if (time == 0) {
    alert("Time's up!!!");

    showResult();
    return;
  } else {
    timer.innerText = time < 10 ? `00:0${time}` : `00:${time}`;

    if (time <= 10) {
      timer.style.color = "#ff6b6b";
    } else if (time <= 20) {
      timer.style.color = "#ffa726";
    } else {
      timer.style.color = "#999999";
    }
    time--;
  }
}, 1000);
