import"./style-DpxMtkDS.js";let e=document.querySelector("#orientation-type"),t=document.querySelector("#orientation-angle");e.textContent=screen.orientation.type;t.textContent=screen.orientation.angle;window.addEventListener("orientationchange",()=>{e.textContent=screen.orientation.type,t.textContent=screen.orientation.angle});const o=document.querySelector("#fullscreen-button");o.addEventListener("click",async()=>{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()});const c=document.querySelector("#lock-button");c.addEventListener("click",async()=>{try{await screen.orientation.lock(screen.orientation.type)}catch(n){console.error(n)}});const r=document.querySelector("#unlock-button");r.addEventListener("click",()=>{screen.orientation.unlock()});