import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as s}from"./assets/vendor-4daf66c6.js";const o={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0])}},t={second:document.querySelector(".clock-seconds"),minute:document.querySelector(".clock-minutes"),hour:document.querySelector(".clock-hours"),day:document.querySelector("#days")};document.querySelector("#datetime-picker").flatpickr(o);new s("#datetime-picker",o);const h=document.querySelector("#datetime-picker");h.addEventListener("click",l);function l(e){s("#datetime-picker",o),console.log(d(t[e.target.text.value]))}setInterval(()=>{const e=new Date;let n=e.getSeconds(),c=e.getMinutes(),r=e.getHours(),u=e.getDay();t.second.textContent=n,t.minute.textContent=c,t.hour.textContent=r,t.day.textContent=u},1e3);function d(e){const i=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:a,minutes:m,seconds:y}}console.log(d(l()));
//# sourceMappingURL=commonHelpers.js.map
