async function loadHTML(url, containerId) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
		}
		const text = await response.text();
		document.getElementById(containerId).innerHTML = text;
	} catch (error) {
		console.error('Error loading HTML:', error);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	loadHTML('/goit-js-hw-09/1-gallery.html', 'gallery-container')
		.then(() => {

			import('/js/1-gallery.js');
		});

	loadHTML('/goit-js-hw-09/2-form.html', 'form-container')
		.then(() => {

			import('/js/2-form.js');
		});
});
