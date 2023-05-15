const chatWidget = document.querySelector(".chat-widget");
const input = document.getElementById("chat-widget__input");
const messages = document.getElementById("chat-widget__messages");

const date = new Date();
let hours = String(date.getHours()).padStart(2, "0");
let minutes = String(date.getMinutes()).padStart(2, "0");

chatWidget.addEventListener('click', function() {
  
    chatWidget.classList.add('chat-widget_active');
    resetTimer();
  });

const robotAnswer = function () {

  const robotAnswers = [
    "Отстань",
    "Отстань я тебе говорю",
    "Старина, отстань да",
    "Больше сюда не пиши",
    "А я вам сейчас покажу",
    "Жидкое золото",
    "Пиши на деревню дедушке",
    "Спасибо папаша, за логан",
    "Что у вас тут происходит",
    "Я устал  мухожук",
  ];

  const randomIndexAnswer = Math.floor(Math.random() * robotAnswers.length);
  const randomAnswer = robotAnswers[randomIndexAnswer];
  setTimeout(() => {
    messages.innerHTML += `
            <div class="message">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">${randomAnswer}</div>
            </div>
        `;
    scrollToLastMessage();
  }, 1000);
};


input.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && input.value.trim() !== "") {
    messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">${input.value}</div>
            </div>
        `;
        input.value = "";
    scrollToLastMessage();

    setTimeout(robotAnswer, 1000);
    resetTimer();
  }
});

function scrollToLastMessage() {
  const lastMessage = messages.lastElementChild;
  lastMessage.scrollIntoView({ behavior: "smooth" });
}

let timerId = 0;

const startTimer = function () {
  setInterval(() => {
    timerId++;
    if (timerId === 30 && chatWidget.classList.contains("chat-widget_active")) {
      robotSendQuestion();
      resetTimer();
    }
  }, 1000);
};

const resetTimer = function () {
  timerId = 0;
};


startTimer();
