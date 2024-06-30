//2 js
// `✅ Fulfilled promise in ${delay}ms` (Якщо проміс виконується вдало, виводь у консоль наступний рядок, де delay — це значення затримки виклику промісу в мілісекундах.)
// `❌ Rejected promise in ${delay}ms` (Якщо проміс буде відхилено, то виводь у консоль наступний рядок, де delay — це значення затримки промісу в мілісекундах.)
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// const formData = {
//     email: "",
//     message: ""
// };

// const form = document.querySelector('.feedback-form');
// const localStorageKey = 'feedback-form-state';

// window.addEventListener('load', function () {
//     const storedData = JSON.parse(this.localStorage.getItem(localStorageKey));
//     if (storedData) {
//         Array.from(form.elements).forEach(function(element) {
//             if (element.name && storedData[element.name]) {
//                 element.value = storedData[element.name];
//                 formData[element.name] = storedData[element.name];
//             }
//         });
//     }
// });

// form.addEventListener('input', function (event) {
//     if (event.target.name === 'email' || event.target.name === 'message') {
//         formData[event.target.name] = event.target.value.trim();
//         localStorage.setItem(localStorageKey, JSON.stringify(formData));
//     };
// });

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let allFieldsFilled = true;
//     Array.from(form.elements).forEach(function (element) {
//         if (element.name && element.value.trim() === '') {
//             allFieldsFilled = false;
//             alert('Fill please all fields');
//             return;
//         }
//     });

//     if (allFieldsFilled) {
//         console.log(formData);
//         localStorage.removeItem(localStorageKey);
//         form.reset();
//         formData.email = ''; //але  як зробити, щоб не очищати
//         formData.message = ''; //кожне поле окремо 
//     }
// });