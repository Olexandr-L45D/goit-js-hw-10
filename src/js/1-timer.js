
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
console.log(selectedDates[0]);// масив обраних дат користувачем
  },
};

const elementses = {
  second: document.querySelector('.clock-seconds'),
  minute: document.querySelector('.clock-minutes'),
  hour: document.querySelector('.clock-hours'),
  day: document.querySelector('#days')
  };

document.querySelector("#datetime-picker").flatpickr(options);
new flatpickr("#datetime-picker", options);

// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

const inputClik = document.querySelector('#datetime-picker');
 inputClik.addEventListener('click', handlerButton)

function handlerButton(event) {
  flatpickr("#datetime-picker", options);

};
//       $('input[type="button"]').removeAttr('disabled');//роблю не активною
// flatpickr(elementses, {});
let userSelectedDate = 1000000; // (0) = обраний час of uzer метод onClose()

const id = setInterval(() => {
 userSelectedDate -= 1000;
const currentTeme = new Date();
let second = currentTeme.getSeconds();
let minute = currentTeme.getMinutes();
let hour = currentTeme.getHours();
let day = currentTeme.getDay();
elementses.second.textContent = second;
elementses.minute.textContent = minute;
elementses.hour.textContent = hour;
elementses.day.textContent = day;

flatpickr(userSelectedDate, options) 
{    
  if (currentTeme >= userSelectedDate) {
      alert("Please choose a date in the future")  
  //передати user - alert
  return
  }
  else {
  // return userSelectedDate
  }
}
  if (!userSelectedDate) { 
    clearInterval(id); 
  }
}, 1000);

setTimeout(()=>{
    clearInterval(id)  
},userSelectedDate*1000)

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
  }
  
 console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   // console.log(convertMs(userSelectedDate)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  // addLeadingZero(value) {
  //   padStart()
  // } // додаэ ноль якщо менше 2 х символы додае 0

//   це скачав з быблыотеки
//   {
//     enableTime: true,
//     dateFormat: "Y-m-d H:i",
// }
// {
//     altInput: true,
//     altFormat: "F j, Y",
//     dateFormat: "Y-m-d",
// }

// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// var izitoast = new iziToast('.container-clock timer', {   });

// приклад -schablon-функцii зворотнього вiдлiку
// const elements = {
//   content: document.querySelector(".js-content"),
//   text: document.querySelector(".js-text"),
// };

// let counter = 10;

// elements.text.textContent = `Залишилось ${counter} секунд`;

// const id = setInterval(() => {
//   counter -= 1;

//   if (!counter) { //0 => false => !false => true
//     clearInterval(id);
//     elements.content.style.display = "none";
//   }

//   elements.text.textContent = `Залишилось ${counter} секунд`;
// }, 1000);

// setTimeout(()=>{
//     clearInterval(id)
//     elements.content.style.display = "none"
// },counter * 1000)