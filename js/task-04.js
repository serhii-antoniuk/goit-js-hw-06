let value = 0;

const refs = {
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector('#value'),
};

const changeValue = step => {
  value = value + step;
  refs.value.textContent = value;
};

refs.increment.addEventListener('click', () => changeValue(+1));
refs.decrement.addEventListener('click', () => changeValue(-1));
