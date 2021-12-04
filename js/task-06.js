const inputField = document.querySelector('#validation-input');
const dataLength = inputField.getAttribute('data-length');

inputField.addEventListener('blur', onBlur);

function onBlur() {
  inputField.classList.add('invalid');

  inputField.value.length === Number(dataLength)
    ? inputField.classList.replace('invalid', 'valid')
    : inputField.classList.replace('valid', 'invalid');
}
