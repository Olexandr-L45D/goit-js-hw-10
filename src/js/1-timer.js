//1js
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
      console.log(selectedDates[0]);
    },
  };
let userSelectedDate = onClose() //записати значення обрано дати пысля валыдацыъ в методы onClose()

// flatpickr(selector, options) {
// // metod onClose() selectedDates[0]
// if (якщо вибрав дату в минулому) {
//     alert("Please choose a date in the future")  
// } else {
    
// } 
// };
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
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  addLeadingZero(value) {
    padStart()
  }
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
flatpickr({
    "plugins": [new weekSelect({})],
    "onChange": [function(){
        // extract the week number
        // note: "this" is bound to the flatpickr instance
        const weekNumber = this.selectedDates[0]
            ? this.config.getWeek(this.selectedDates[0])
            : null;

        console.log(weekNumber);
    }]
});
