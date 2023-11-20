window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar')

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

jQuery(document).ready(function ($) {
  $('.content').css('display', 'none')
  $('.active').css('display', 'block')
})

function showContent(contentId, button) {
  let contents = document.getElementsByClassName('slider-group')
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none'
  }

  let buttons = document.getElementsByClassName('toggle-btn')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active-btn')
  }

  document.getElementById(contentId).style.display = 'block'

  button.classList.add('active-btn')
}

jQuery(document).ready(function ($) {
  $('.first-slider-content').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
})
