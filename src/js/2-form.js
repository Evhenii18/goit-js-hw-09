const STORAGE_KEY = 'feedback-form-state';

let formData = {
	email: '',
	message: ''
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;


loadFormData();

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
	formData[event.target.name] = event.target.value.trim();
	localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function onFormSubmit(event) {
	event.preventDefault();

	if (emailInput.value === '' || messageInput.value === '') {
		alert('Fill please all fields');
		return;
	}

	console.log(formData);

	localStorage.removeItem(STORAGE_KEY);
	formData = { email: '', message: '' };
	form.reset();
}


function loadFormData() {
	const savedData = localStorage.getItem(STORAGE_KEY);

	if (savedData) {
		formData = JSON.parse(savedData);
		emailInput.value = formData.email;
		messageInput.value = formData.message;
	}
}
