import"./assets/styles-2b896271.js";const t={email:"",message:""},n=document.querySelector(".feedback-form"),o="feedback-form-state";function r(e=!1){for(let a in t){e&&(t[a]="");const l=n.querySelector(`[name=${a}]`);l!==null&&(l.value=t[a])}}function i(){if(localStorage.getItem(o)!==null){const e=JSON.parse(localStorage.getItem(o));for(let a in e)t[a]=e[a]}}n.addEventListener("input",e=>{e.target.name in t&&(t[e.target.name]=e.target.value.trim()),localStorage.setItem(o,JSON.stringify(t))});n.addEventListener("submit",e=>{e.preventDefault();let a=!0;for(let l in t)t[l]==""&&(a=!1);a==!0?(console.log(t),r(!0),localStorage.removeItem(o)):alert("Fill please all fields")});i();r();
//# sourceMappingURL=commonHelpers2.js.map
