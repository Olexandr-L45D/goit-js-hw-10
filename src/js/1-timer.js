
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate = null;
const dateTimPicker = document.querySelector('#datetime-picker');
const startButt = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');
let countInterval = null; 

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    
    if (selectedDates <= new Date()) 
      {
        iziToast.error({
            title: 'Error',
            message: 'Please choose a date in the future'
        });
        startButt.disabled = true;
    } else {
        userSelectedDate = selectedDates;
        startButt.disabled = false;
    }
},
};

flatpickr("#datetime-picker", options);

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

  const addLeadingZero = value => String(value).padStart(2, '0');

  const updateTimerDisplay = ({ days, hours, minutes, seconds }) => {
      daysValue.textContent = days;
      hoursValue.textContent = addLeadingZero(hours);
      minutesValue.textContent = addLeadingZero(minutes);
      secondsValue.textContent = addLeadingZero(seconds);
  };
  
  const startTimer = () => {
    countInterval = setInterval(() => {
          const noWdate = new Date();
          const timeLeft = userSelectedDate - noWdate;
  
          if (timeLeft <= 0) {
              clearInterval(countInterval);
              updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
              dateTimPicker.disabled = false;
              return;
          }
  
          const timeMilliseconds = convertMs(timeLeft);
          updateTimerDisplay(timeMilliseconds);
      }, 1000);
  };
  
  
  startButt.addEventListener('click', () => {
      if (!userSelectedDate) {
          return;
      }
      startButt.disabled = true;
    dateTimPicker.disabled = true;
    startTimer();
    });

   