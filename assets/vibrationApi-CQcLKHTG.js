import"./style-DpxMtkDS.js";const t=document.querySelector("#vibrate-button"),e=document.querySelector("#stop-vibrate-button"),n=document.querySelector("#milliseconds-input");t.addEventListener("click",()=>{navigator.vibrate(n.value*1e3)});e.addEventListener("click",()=>{navigator.vibrate(0)});