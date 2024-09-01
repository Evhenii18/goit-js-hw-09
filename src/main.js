async function loadHTML(url, container) {
	const response = await fetch(url);
	const text = await response.text();
	container.innerHTML = text;
}

document.addEventListener('DOMContentLoaded', () => {
	const galleryContainer = document.querySelector('.gallery');
	const formContainer = document.querySelector('.form-container');

	
	loadHTML('/goit-js-hw-09/2-form.html', formContainer);
});