(()=>{const e=document.querySelector("body");aside=document.querySelector(".aside-nav"),menuIcon=document.querySelector(".menu-icon"),closeIcon=document.querySelector(".aside-x"),menuIcon.addEventListener("click",(()=>{aside.classList.toggle("display-toggle"),e.classList.toggle("overflow-toggle")})),closeIcon.addEventListener("click",(()=>{aside.classList.toggle("display-toggle"),e.classList.toggle("overflow-toggle")})),document.querySelectorAll(".link-contato").forEach((function(e){e.addEventListener("click",(function(){const e=document.getElementById("contato").offsetTop;window.scrollTo({top:e,behavior:"smooth"})}))})),document.querySelector(".mapa-btn").addEventListener("click",(function(){window.open("https://www.google.com/maps/place/R.+Padre+Agostinho+de+Matos,+234+-+Parada+Inglesa,+São+Paulo+-+SP,+02247-140/@-23.4868465,-46.6019267,17z/data=!4m6!3m5!1s0x94cef60e34df7ddb:0xae97c13d7de2573!8m2!3d-23.4868465!4d-46.6019267!16s%2Fg%2F11c23q907w","_blank")}))})();