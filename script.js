const questions = [
  {
    question: "At what age is a person considered an adult in Nigeria?",
    options: ["18", "30", "20", "60"],
    correct: "18",
  },
  {
    question: "What are the primary colors?",
    options: [
      "Black, white, gray",
      "Red, yellow, blue",
      "Red, green, blue",
      "None of the above",
    ],
    correct: "Red, yellow, blue",
  },
  {
    question: "What is 6 + 6 * 2?",
    options: ["24", "18", "20", "None of the above"],
    correct: "18",
  },
  {
    question: "Who is the president of Nigeria?",
    options: ["Buhari", "Obasanjo", "Tinubu", "I don't know"],
    correct: "Tinubu",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: "Mars",
  },
  {
    question: "What is the boiling point of water?",
    options: ["50°C", "100°C", "150°C", "200°C"],
    correct: "100°C",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue whale", "Giraffe", "Shark"],
    correct: "Blue whale",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    correct: "William Shakespeare",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "India"],
    correct: "Japan",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "8", "10", "12"],
    correct: "8",
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Pacific", "Indian", "Arctic"],
    correct: "Pacific",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correct: "7",
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    correct: "Carbon dioxide",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Claude Monet",
      "Leonardo da Vinci",
    ],
    correct: "Leonardo da Vinci",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Pb"],
    correct: "Au",
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Elephant", "Lion", "Tiger", "Leopard"],
    correct: "Lion",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mount Fuji"],
    correct: "Mount Everest",
  },
  {
    question: "How many days are there in a leap year?",
    options: ["364", "365", "366", "367"],
    correct: "366",
  },
  {
    question: "What is the freezing point of water?",
    options: ["-100°C", "0°C", "32°C", "-32°C"],
    correct: "0°C",
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
    questionsContainer.innerHTML = `<p>Question ${currentIndex + 1} out of ${
      questions.length
    }</p> <h3>${questions[currentIndex].question}</h3>`;
    optionsContainer.innerHTML = questions[currentIndex].options
      .map(
        (option, index) =>
          `<div class="quiz-option">
            <input type="radio" id="option${
              index + 1
            }" name="answer" value="${option}"> 
            <label for="option${index + 1}">${option}</label>
          </div>`
      )
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
  questionsContainer.innerHTML = `<h1>You scored ${score}/${questions.length}</h1>`;
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
    showResult();

    alert("Time's up!!!");
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
