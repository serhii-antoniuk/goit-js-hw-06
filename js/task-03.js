const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
images.forEach(element => {
  galleryEl.insertAdjacentHTML(
    `afterbegin`,
    `<li><img src = ${element.url} alt = ${element.alt} width = '600' height = '600'/></li>`,
  );
});

const gallery = document.querySelector('.gallery');

gallery.style.display = 'flex';
gallery.style.flexDirection = 'row';
gallery.style.justifyContent = 'space-evenly';
gallery.style.listStyle = 'none';
