const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  changeColorLabel: document.querySelector('.color'),
};

const onChangeColorBtnClick = () => {
  const color = getRandomHexColor();
  document.body.style.background = color;
  refs.changeColorLabel.textContent = color;
  console.log(refs.changeColorLabel);
};
refs.changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
