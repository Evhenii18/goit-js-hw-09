const images = [
	
	{
		preview: 'goit-js-hw-09/img/1.jpg',
		original: 'goit-js-hw-09/img/1.jpg',
		description: 'Image 1 description',
	},

	{
		preview: 'img/2.jpg',
		original: 'img/2.jpg',
		description: 'Image 2 description',
	},
	{
		preview: 'img/3.jpg',
		original: 'img/3.jpg',
		description: 'Image 3 description',
	},
	{
		preview: 'img/4.jpg',
		original: 'img/4.jpg',
		description: 'Image 4 description',
	},
	{
		preview: 'img/5.jpg',
		original: 'img/5.jpg',
		description: 'Image 5 description',
	},
	{
		preview: 'img/6.jpg',
		original: 'img/6.jpg',
		description: 'Image 6 description',
	},
	{
		preview: 'img/7.jpg',
		original: 'img/7.jpg',
		description: 'Image 7 description',
	},
	{
		preview: 'img/8.jpg',
		original: 'img/8.jpg',
		description: 'Image 8 description',
	},
	{
		preview: 'img/9.jpg',
		original: 'img/9.jpg',
		description: 'Image 9 description',
	},
	
];

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = images.map(({ preview, original, description }) => {
	return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
}).join('');

galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
	captions: true,
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
	overlay: true,
});


