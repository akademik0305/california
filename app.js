const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// open close search input
const searchInput = document.querySelector('#search_input')
const searchButton = document.querySelector('#search_button')

searchButton.addEventListener('click', () => {
  searchInput.classList.toggle('active')
})

// open dropdown
const dropMenu = document.querySelector('#drop_menu')
const dropBtn = document.querySelector('#drop_btn')

dropBtn.addEventListener('click', () => {
  dropMenu.classList.toggle('active')
})

