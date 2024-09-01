import{S as s}from"./vendor-CgTBfC_f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))g(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&g(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function g(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();const p=[{preview:"./img/1.jpg",original:"./img/1.jpg",description:"Image 1 description"},{preview:"./img/2.jpg",original:"./img/2.jpg",description:"Image 2 description"},{preview:"./img/3.jpg",original:"./img/3.jpg",description:"Image 3 description"},{preview:"./img/4.jpg",original:"./img/4.jpg",description:"Image 4 description"},{preview:"./img/5.jpg",original:"./img/5.jpg",description:"Image 5 description"},{preview:"./img/6.jpg",original:"./img/6.jpg",description:"Image 6 description"},{preview:"./img/7.jpg",original:"./img/7.jpg",description:"Image 7 description"},{preview:"./img/8.jpg",original:"./img/8.jpg",description:"Image 8 description"},{preview:"./img/9.jpg",original:"./img/9.jpg",description:"Image 9 description"}],a=document.querySelector(".gallery"),c=p.map(({preview:n,original:r,description:t})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img
          class="gallery-image"
          src="${n}"
          data-source="${r}"
          alt="${t}"
        />
      </a>
    </li>`).join("");a.innerHTML=c;new s(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlay:!0});
//# sourceMappingURL=1-gallery-4j_3gA4I.js.map
