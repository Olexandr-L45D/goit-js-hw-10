
// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

const elementses = {
second: document.querySelector('.clock-seconds'),
minute: document.querySelector('.clock-minutes'),
hour: document.querySelector('.clock-hours'),
day: document.querySelector('.clock-days')
};
const currentTeme = new Date();
let second = currentTeme.getSeconds();
let minute = currentTeme.getMinutes();
let hour = currentTeme.getHours();
let day = currentTeme.getDay();

elementses.second.textContent = second;
elementses.minute.textContent = minute;
elementses.hour.textContent = hour;
elementses.day.textContent = arrDay[day];

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
 console.log(selectedDates[0]);// масив обраних дат користувачем
    },
  };

// // flatpickr(selector, options) {
// //   onClose: function(selectedDates, dateStr, instance) {
    
// //  }
// // }
// // metod onClose() selectedDates[0] валыдуем в методы онклоз обрану дату
// if (day <= defaultDate ) {
//     alert("Please choose a date in the future")  
// } else {
    
// } 
// };
 let userSelectedDate = defaultDate; // в цю змынну записати значення обрано дати пысля валыдацыъ в методы onClose()

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

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
// flatpickr({
//     "plugins": [new weekSelect({})],
//     "onChange": [function(){
//         // extract the week number
//         // note: "this" is bound to the flatpickr instance
//         const weekNumber = this.selectedDates[0]
//             ? this.config.getWeek(this.selectedDates[0])
//             : null;

//         console.log(weekNumber);
//     }]
// });

// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// var flatpic = new flatpickr('.container-clock timer', {   });// не так створюэться (дивитись документацыю)

// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// var izitoast = new iziToast('.container-clock timer', {   });