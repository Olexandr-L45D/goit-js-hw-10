import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as c}from"./assets/vendor-4daf66c6.js";const n={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0])}},o={second:document.querySelector(".clock-seconds"),minute:document.querySelector(".clock-minutes"),hour:document.querySelector(".clock-hours"),day:document.querySelector("#days")};document.querySelector("#datetime-picker").flatpickr(n);new c("#datetime-picker",n);const f=document.querySelector("#datetime-picker");f.addEventListener("click",k);function k(e){c("#datetime-picker",n)}let t=1e6;const i=setInterval(()=>{t-=1e3;const e=new Date;let r=e.getSeconds(),u=e.getMinutes(),s=e.getHours(),l=e.getDay();o.second.textContent=r,o.minute.textContent=u,o.hour.textContent=s,o.day.textContent=l,c(t,n),t||clearInterval(i)},1e3);setTimeout(()=>{clearInterval(i)},t*1e3);function a(e){const d=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),y=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:m,minutes:y,seconds:h}}console.log(a(t));console.log(a(2e3));
//# sourceMappingURL=commonHelpers.js.map
