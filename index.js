import"./assets/1-gallery-DHhizQDP.js";import"./assets/vendor-CgTBfC_f.js";const o="feedback-form-state";let e={email:"",message:""};const a=document.querySelector(".feedback-form");a&&(n(),a.addEventListener("input",s),a.addEventListener("submit",r));function s(t){e[t.target.name]=t.target.value.trim(),localStorage.setItem(o,JSON.stringify(e))}function r(t){t.preventDefault();const{email:m,message:l}=e;if(m===""||l===""){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(o),e={email:"",message:""},a.reset()}function n(){const t=localStorage.getItem(o);t&&(e=JSON.parse(t),a.elements.email.value=e.email,a.elements.message.value=e.message)}
//# sourceMappingURL=index.js.map
