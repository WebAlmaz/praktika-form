const prices = { '0.5': 500, '1': 1000, '5': 4500, '10': 8000 };
const form = document.querySelector('#order-form');
const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');
const weightSelect = document.querySelector('#weight');
const totalPrice = document.querySelector('#total-price');

function formatSom(price) { return `${new Intl.NumberFormat('ru-RU').format(price)} сом`; }
function updateTotal() { totalPrice.value = formatSom(prices[weightSelect.value]); totalPrice.textContent = totalPrice.value; }

weightSelect.addEventListener('change', updateTotal);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  if (!name || !phone) { alert('Пожалуйста, заполните имя и телефон.'); return; }
  const weight = weightSelect.value;
  const message = `Здравствуйте! Меня зовут ${name}. Хочу заказать ${weight} кг малины на сумму ${prices[weight]} сом. Мой телефон: ${phone}`;
  window.location.href = `https://wa.me/996777770750?text=${encodeURIComponent(message)}`;
});
updateTotal();
