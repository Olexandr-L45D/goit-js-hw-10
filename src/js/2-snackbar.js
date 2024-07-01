
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

 const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const delay = parseInt(form.elements.delay.value)
    const states = form.elements.state.value;
    cretPromis(delay, states)
.then(delay => {iziToast.success ({title: 'Success', 
  message: `✅ Fulfilled promise in ${delay}ms`
});
})
.catch(delay => {iziToast.error ({title: 'Error', 
  message: `❌ Rejected promise in ${delay}ms`
});
}) });
// .finally(() => console.log(delay)); // in ${delay}ms`
//   });
function cretPromis(delay, states) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (states === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
}


