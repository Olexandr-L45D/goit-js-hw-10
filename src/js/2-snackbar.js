
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

 const form = document.querySelector('.form');

form.addEventListener('submit', function (event, delay) {
    event.preventDefault();
    const isSuccess = true;
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve(`✅ Fulfilled promise in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise in ${delay}ms` );
    }
  }, 1000);
});

promise
  .then(`✅ Fulfilled promise in ${delay}ms`) // `✅ Fulfilled promise in ${delay}ms`
  .catch((error) => console.log(`❌ Rejected promise in ${delay}ms`)) // `❌ Rejected promise in ${delay}ms`
  .finally(() => console.log(delay)); // in ${delay}ms`
    });


// form.addEventListener('input', function (event) {
//     if (event.target.name === 'delay' ) {
//          return event.target.value.trim();
//     };
// });


