
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

 const form = document.querySelector('.form');

form.addEventListener('submit', function (delay) {
    const isSuccess = delay;
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
  .then(value => iziToast) // "Success! Value passed to resolve function"
  .catch(error => iziToast) // "Error! Error passed to reject function"
  .finally(() => console.log("Promise settled")); // "Promise settled"
    });


form.addEventListener('input', function (event) {
    if (event.target.name === 'delay' ) {
         return event.target.value.trim();
       
    };
});