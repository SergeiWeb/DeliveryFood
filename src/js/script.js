const cardButtonBasket = document.getElementById('button-basket');
const modalWindow = document.getElementById('modalWindow');
const closeButton = document.getElementById('closeButton');
const body = document.body;

cardButtonBasket.addEventListener('click', toggleModal);

closeButton.addEventListener('click', toggleModal);

function toggleModal() {
	modalWindow.classList.toggle('is-open');
	body.classList.toggle('blocking');
}
