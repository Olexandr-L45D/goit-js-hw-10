import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as c,i as y}from"./assets/vendor-77e16229.js";const n={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0])}},o={second:document.querySelector(".clock-seconds"),minute:document.querySelector(".clock-minutes"),hour:document.querySelector(".clock-hours"),day:document.querySelector("#days")};document.querySelector("#datetime-picker").flatpickr(n);new c("#datetime-picker",n);const f=document.querySelector("#datetime-picker");f.addEventListener("click",k);function k(e){c("#datetime-picker",n)}let t=[0];const a=setInterval(()=>{t-=1e3;const e=new Date;let r=e.getSeconds(),u=e.getMinutes(),s=e.getHours(),i=e.getDay();if(o.second.textContent=r,o.minute.textContent=u,o.hour.textContent=s,o.day.textContent=i,c(t,n),e>=t)S("Please choose a date in the future");else return t;t||clearInterval(a)},1e3);setTimeout(()=>{clearInterval(a)},t*1e3);function p(e){const l=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:d,minutes:m,seconds:h}}console.log(p(t));let S=new y(".container-clock timer",250);
//# sourceMappingURL=commonHelpers.js.map
