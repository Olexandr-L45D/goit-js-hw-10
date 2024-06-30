
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

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

const inputClik = document.querySelector('#datetime-picker');
 inputClik.addEventListener('click', handlerButton)

function handlerButton(event) {
  flatpickr("#datetime-picker", options);
  console.log(convertMs(elementses[event.target.text.value]))
}; 

 let userSelectedDate = Array.elementses; // (0) = обраний час of uzer метод onClose()
// let userSelectedDate = Document.options.selectedDates; // (0) = обраний час of uzer метод onClose()

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
}, 1000);

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
  console.log(convertMs(handlerButton()));
  // console.log(convertMs(Number.elementses))
  
 //    .removeAttr('disabled');//роблю не активною
  // addLeadingZero(value) {
  //   padStart()
  //   // console.log(addLeadingZero());
  // } // додаэ ноль якщо менше 2 х символы додае 0
  
// 
// {    
//   if (currentTeme >= targetDate) {
//       izitoast("Please choose a date in the future")  
//   //передати user - alert
//   }
//   else {
//   //  return userSelectedDate
//   }
// }
//   if (!userSelectedDate) { 
//     clearInterval(id); 
//   }

  
