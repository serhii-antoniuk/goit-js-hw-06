const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', sendForm);

function sendForm(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === '' || password === '') {
    return alert('Все поля должны быть заполнены!');
  }

  const formData = { mail, password };

  console.log(formData);
  event.currentTarget.reset();
}
