import"./style-D_WYEtkp.js";const r=document.querySelector(".get-contacts"),i=document.querySelector(".contact-list"),l=["name","tel","icon"],p={multiple:!0},d=t=>{if(t.length>0){const e=URL.createObjectURL(t[0]),n=document.createElement("img");return n.src=e,n.className="icon",n}},m=t=>{t.forEach(({name:e,email:n,tel:o,icon:s})=>{const c=document.createElement("li");c.innerText=`${e}: ${o??n}`,i.appendChild(c);const a=d(s);c.appendChild(a)})},u=async()=>{try{if(!("contacts"in navigator&&"ContactsManager"in window))throw"not-supported";const e=await navigator.contacts.select(l,p);m(e)}catch(t){t==="not-supported"?alert("Conctacts API nos supported"):console.error(t)}};r.addEventListener("click",u);
