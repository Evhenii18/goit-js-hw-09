const images = [
	
	{
		preview: new URL('/img/1.jpg', import.meta.url).href,
		original: new URL('/img/1.jpg', import.meta.url).href,
		description: 'Image 1 description',
	},

	{
		preview: new URL('/img/2.jpg', import.meta.url).href,
		original: new URL('/img/2.jpg', import.meta.url).href,
		description: 'Image 2 description',
	},
	{
		preview: new URL('/img/3.jpg', import.meta.url).href,
		original: new URL('/img/3.jpg', import.meta.url).href,
		description: 'Image 3 description',
	},
	{
		preview: new URL('../img/4.jpg', import.meta.url).href,
		original: new URL('../img/4.jpg', import.meta.url).href,
		description: 'Image 4 description',
	},
	{
		preview: new URL('../img/5.jpg', import.meta.url).href,
		original: new URL('../img/5.jpg', import.meta.url).href,
		description: 'Image 5 description',
	},
	{
		preview: new URL('../img/6.jpg', import.meta.url).href,
		original: new URL('../img/6.jpg', import.meta.url).href,
		description: 'Image 6 description',
	},
	{
		preview: new URL('../img/7.jpg', import.meta.url).href,
		original: new URL('../img/7.jpg', import.meta.url).href,
		description: 'Image 7 description',
	},
	{
		preview: new URL('../img/8.jpg', import.meta.url).href,
		original: new URL('../img/8.jpg', import.meta.url).href,
		description: 'Image 8 description',
	},
	{
		preview: new URL('../img/9.jpg', import.meta.url).href,
		original: new URL('../img/9.jpg', import.meta.url).href,
		description: 'Image 9 description',
	},
	
];

import SimpleLightbox from 'simplelightbox';



const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = images.map(({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img class="gallery-image" src="${preview}" alt="${description}" />
    </a>
  </li>
`).join('');

galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
	captions: true,
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
	disableScroll: true,
	overlayOpacity: 0.8, // прозрачность
});



