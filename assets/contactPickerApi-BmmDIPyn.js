import"./style-CW2us1CI.js";const a=document.querySelector(".get-contacts"),r=document.querySelector(".contact-list"),i=["name","tel","icon"],l={multiple:!0},p=t=>{if(t.length>0){const e=URL.createObjectURL(t[0]),n=document.createElement("img");return n.src=e,n.className="icon",n}},d=t=>{t.forEach(({name:e,tel:n,icon:o})=>{const c=document.createElement("li");c.innerText=`${e}: ${n}`,r.appendChild(c);const s=p(o);c.appendChild(s)})},m=async()=>{try{if(!("contacts"in navigator&&"ContactsManager"in window))throw"not-supported";const e=await navigator.contacts.select(i,l);d(e)}catch(t){t==="not-supported"?alert("Conctacts API nos supported"):console.error(t)}};a.addEventListener("click",m);
