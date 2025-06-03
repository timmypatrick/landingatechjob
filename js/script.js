// Call To Action Countdown

function ctaCountdown(){
  const days = document.querySelector(".call-to-action .days");
  const hours = document.querySelector(".call-to-action .hours");
  const minutes = document.querySelector(".call-to-action .minutes");
  const seconds = document.querySelector(".call-to-action .seconds");

  const targetDate = new Date("June 10 2025 20:00:00").getTime();
  const currentDate = new Date().getTime();
  const distance = targetDate - currentDate;

  const day = Math.floor(distance / 1000 / 60 / 60 / 24);
  const hour = Math.floor(distance / 1000 / 60 / 60) % 24;
  const minute = Math.floor(distance / 1000 / 60) % 60;
  const second = Math.floor(distance / 1000) % 60;

  days.innerHTML = day;
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;

  if(distance < 0){
    days.innerHTML = "00";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
  }
}

setInterval(ctaCountdown, 1000);



// Testimonial Slider
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// Summary Countdown

function summaryCountdown(){
  const days = document.querySelector(".summary .days");
  const hours = document.querySelector(".summary .hours");
  const minutes = document.querySelector(".summary .minutes");
  const seconds = document.querySelector(".summary .seconds");

  const targetDate = new Date("June 10 2025 20:00:00").getTime();
  const currentDate = new Date().getTime();
  const distance = targetDate - currentDate;

  const day = Math.floor(distance / 1000 / 60 / 60 / 24);
  const hour = Math.floor(distance / 1000 / 60 / 60) % 24;
  const minute = Math.floor(distance / 1000 / 60) % 60;
  const second = Math.floor(distance / 1000) % 60;

  days.innerHTML = day;
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;

  if(distance < 0){
    days.innerHTML = "00";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
  }
}

setInterval(summaryCountdown, 1000);


// FAQs

const questAnsBox = document.querySelector(".question-answer-box");
const form = document.querySelector("form");
const inputField = form.querySelector("input");
const buttonField = form.querySelector("button");

questAnsBox.addEventListener("click", (e) => {
    const question = e.target.closest(".question");
    if (question) {
        const icon = question.querySelector("i");
        const questAns = question.parentElement;
        const answer = questAns.querySelector(".answer");
        icon.classList.toggle("fa-arrow-down");
        icon.classList.toggle("fa-arrow-up");
        answer.classList.toggle("display-answer");
        const questAnsArray = document.querySelectorAll(".question-answer");
        questAnsArray.forEach((otherQuestAns) => {
            if (questAns !== otherQuestAns) {
                const otherAns = otherQuestAns.querySelector(".answer");
                const othericons = otherQuestAns.querySelector("i");
                otherAns.classList.remove("display-answer");
                othericons.classList.remove("fa-arrow-up");
                othericons.classList.add("fa-arrow-down");
            }
        })
    }
})


// Programs for question addition
  buttonField.addEventListener("click", (e) => {
  e.preventDefault();
  const formIndividualData = new FormData(form);
  const inputValue = formIndividualData.get("input-question");
  if (inputValue !== "" && inputValue !== " ") {
    const newQuestionWrapper = document.createElement("div");
    const newQuestion = document.createElement("p");
    const questionText = document.createTextNode(inputValue);
    const newIcon = document.createElement("i");
    newQuestionWrapper.classList.add("question-answer");
    newIcon.classList.add("fa", "fa-close");
    questAnsBox.appendChild(newQuestionWrapper);
    newQuestionWrapper.appendChild(newQuestion);
    newQuestion.appendChild(questionText);
    newQuestionWrapper.appendChild(newIcon);
    newQuestionWrapper.style.display = "flex";
    newQuestionWrapper.style.justifyContent = "space-between";
    newQuestion.style.overflow = "auto";
    newIcon.style.cursor = "pointer";
    inputField.value = "";
    newIcon.addEventListener("click", () => {
        newQuestionWrapper.remove();
    })
  }
})