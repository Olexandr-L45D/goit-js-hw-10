
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

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputClik = document.querySelector('#datetime-picker');
 inputClik.addEventListener('click', handlerButton)

function handlerButton(event) {
  flatpickr("#datetime-picker", options);

};
//    .removeAttr('disabled');//роблю не активною

let userSelectedDate = [0]; // (0) = обраний час of uzer метод onClose()

const id = setInterval(() => {
 userSelectedDate -= 1000;
//  const currentTemer = new Date();
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
      izitoast("Please choose a date in the future")  
  //передати user - alert
  }
  else {
   return userSelectedDate
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
  console.log(convertMs(userSelectedDate));

  // addLeadingZero(value) {
  //   padStart()
  //   // console.log(addLeadingZero());
  // } // додаэ ноль якщо менше 2 х символы додае 0

  let izitoast = new iziToast('.container-clock timer', 250);
