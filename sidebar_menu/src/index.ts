import '../style/style.scss';

const navigation = document.querySelector('.navigation');
const menuToggle = document.querySelector('.menuToggle');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('open');
})

const list = document.querySelectorAll('li')

function activeLink() {
  list.forEach((item) => {
    item.classList.remove('active');
    this.classList.add('active');
  })
}

list.forEach((item) => {
  item.addEventListener('click', activeLink)
})