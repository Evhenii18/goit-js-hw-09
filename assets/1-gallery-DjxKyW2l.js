import{S as t}from"./vendor-B-WyX8ve.js";const s=[{preview:new URL("/goit-js-hw-09/assets/1-BDlqddev.jpg",import.meta.url).href,original:new URL("/goit-js-hw-09/assets/1-BDlqddev.jpg",import.meta.url).href,description:"Image 1 description"},{preview:new URL("/goit-js-hw-09/assets/2-Bnek9mdE.jpg",import.meta.url).href,original:new URL("/goit-js-hw-09/assets/2-Bnek9mdE.jpg",import.meta.url).href,description:"Image 2 description"},{preview:new URL("/goit-js-hw-09/assets/3-DjJLQ-qS.jpg",import.meta.url).href,original:new URL("/goit-js-hw-09/assets/3-DjJLQ-qS.jpg",import.meta.url).href,description:"Image 3 description"},{preview:new URL("/goit-js-hw-09/assets/4-58QsE89I.jpg",import.meta.url).href,original:new URL("/goit-js-hw-09/assets/4-58QsE89I.jpg",import.meta.url).href,description:"Image 4 description"},{preview:new URL("/goit-js-hw-09/assets/5-DcXnYkW-.jpg",import.meta.url).href,original:new URL("/goit-js-hw-09/assets/5-DcXnYkW-.jpg",import.meta.url).href,description:"Image 5 description"},{preview:new URL("/goit-js-hw-09/assets/6-BnUDSjWx.jpg",import.meta.url).href,original:new URL("/goit-js-hw-09/assets/6-BnUDSjWx.jpg",import.meta.url).href,description:"Image 6 description"},{preview:new URL("/goit-js-hw-09/assets/7-BTOW8WtS.jpg",import.meta.url).href,original:new URL("/goit-js-hw-09/assets/7-BTOW8WtS.jpg",import.meta.url).href,description:"Image 7 description"},{preview:new URL("/goit-js-hw-09/assets/8-DPMk8yB9.jpg",import.meta.url).href,original:new URL("/goit-js-hw-09/assets/8-DPMk8yB9.jpg",import.meta.url).href,description:"Image 8 description"},{preview:new URL("/goit-js-hw-09/assets/9-_6rDUri3.jpg",import.meta.url).href,original:new URL("/goit-js-hw-09/assets/9-_6rDUri3.jpg",import.meta.url).href,description:"Image 9 description"}],a=document.querySelector(".gallery"),o=s.map(({preview:e,original:i,description:r})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${i}">
            <img 
                class="gallery-image" 
                src="${e}" 
                alt="${r}" 
            />
        </a>
    </li>
    `).join("");a.innerHTML=o;new t(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250,disableScroll:!0,overlayOpacity:.8});
//# sourceMappingURL=1-gallery-DjxKyW2l.js.map
