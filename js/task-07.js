const refs = {
  rangeInput: document.querySelector('#font-size-control'),
  textBelongInput: document.querySelector('#text'),
};
const onRangeChange = event => {
  const { value } = event.target;

  refs.textBelongInput.style.fontSize = `${value}px`;
};
refs.rangeInput.addEventListener('input', onRangeChange);
