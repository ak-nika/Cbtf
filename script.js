const questions = [
  {
    que: "At what age is a person considered an adult in Nigeria?",
    options: ["18", "30", "20", "60"],
    correct: "18",
  },
  {
    que: "What are the colour spectrums?",
    options: [
      "Black, white, gray",
      "Red, yellow, blue",
      "Red, green, blue",
      "None of the above",
    ],
    correct: "Red, green, blue",
  },
  {
    que: "What is 6+6X2?",
    options: ["24", "18", "20", "None of the above"],
    correct: "18",
  },
  {
    que: "Who is the president of Nigeria?",
    options: ["Buhari", "Obasanjo", "Tinubu", "I don't know"],
    correct: "Tinubu",
  },
];
let currentIndex = 0;
const lastIndex = questions.length - 1;
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const nextBtn = document.getElementById("next");
const timer = document.getElementById("timer");
let time = 60;
let score = 0;

const displayQuestions = () => {
  if (currentIndex < questions.length) {
    div1.innerHTML = `<h3>Question ${currentIndex + 1}</h3><p>${
      questions[currentIndex].que
    }</p>`;
    div2.innerHTML = questions[currentIndex].options
      .map(
        (option) =>
          `<input type="radio" name="answer" value="${option}"> ${option}`
      )
      .join("");
  } else {
    showResult();
  }
};

const showResult = () => {
  div1.style.display = "none";
  div2.style.display = "none";
  nextBtn.style.display = "none";
  alert(`You scored ${score} out of ${questions.length}`);
  clearInterval(timerInterval);
  timer.textContent = `0 sec`;
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
displayQuestions();

const timerInterval = setInterval(() => {
  if (time == 0) {
    alert("Time's up!!!");
    clearInterval(timerInterval);
    timer.textContent = `0 sec`;
    alert(`You scored ${score} out of ${questions.length}`);
    return;
  } else {
    timer.textContent = `${time} sec`;
    time--;
  }
}, 1000);
