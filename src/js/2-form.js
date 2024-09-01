const STORAGE_KEY = 'feedback-form-state';

let formData = {
	email: '',
	message: ''
};

const form = document.querySelector('.feedback-form');

// Перевіряємо, чи існує форма на сторінці
if (form) {
	const emailInput = form.elements.email;
	const messageInput = form.elements.message;

	// Завантажуємо дані з localStorage при завантаженні сторінки
	loadFormData();

	form.addEventListener('input', onFormInput);
	form.addEventListener('submit', onFormSubmit);

	function onFormInput(event) {
		formData[event.target.name] = event.target.value.trim();
		localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
	}

	function onFormSubmit(event) {
		event.preventDefault();

		// Перевірка, чи всі поля заповнені
		if (emailInput.value === '' || messageInput.value === '') {
			alert('Fill please all fields');
			return;
		}

		console.log(formData);

		// Очищення localStorage та formData
		localStorage.removeItem(STORAGE_KEY);
		formData = { email: '', message: '' };
		form.reset();
	}

	function loadFormData() {
		const savedData = localStorage.getItem(STORAGE_KEY);

		// Якщо є збережені дані, підставляємо їх у форму
		if (savedData) {
			formData = JSON.parse(savedData);
			emailInput.value = formData.email;
			messageInput.value = formData.message;
		}
	}
} else {
	console.error('Форма не знайдена на сторінці.');
}
