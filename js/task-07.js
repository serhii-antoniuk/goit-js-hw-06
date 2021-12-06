const refs = {
  rangeInput: document.querySelector('#font-size-control'),
  textBelongInput: document.querySelector('#text'),
};

refs.textBelongInput.style.fontSize = `${refs.rangeInput.value}px`;

const onRangeChange = event => {
  const { value } = event.target;

  refs.textBelongInput.style.fontSize = `${value}px`;
};
refs.rangeInput.addEventListener('input', onRangeChange);
