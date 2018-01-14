$(document).ready(function () {
  // parallax effect
  $('.parallax').parallax()

  // tabs
  $('ul.tabs').tabs({
    swipeable: true
    // responsiveThreshold: 1920
  })

  // collapsibles
  $('.collapsible').collapsible()

  // scroll on name click
  $('h1 span').click(function () {
    $('html, body').animate({
      scrollTop: $('.about').offset().top
    }, 1000)
  })

  $('.arrow').click(function () {
    $('html, body').animate({
      scrollTop: $('.about').offset().top
    }, 1000)
  })

  // function h5Show () {
  //   console.log('hi')
  //   $('.about__left__h5').addClass('about__left__h5--show')
  // }

  // var options = { selector: '.about__left__h5', offset: 200, callback: h5Show }
  // not working, may be lack of internet
  // Materialize.scrollFire(options)

  // scroll on nav bar click
  $('nav').click(function () {
    $('html, body').animate({
      scrollTop: $('nav').offset().top
    }, 1000)
  })

  // start landing animation
  $('.parallax1__screen').addClass('parallax1__screen--go')
})
