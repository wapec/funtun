$(document).ready(function () {

  // count numbers
  $(window).one('mouseenter touchstart', function () {
    $('.count').one().each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
    });
  });

  // current year
  $('#currentYear').text((new Date()).getFullYear());

  // curtain
  setTimeout(function () {
    $('.curtain').addClass('no-display');
  }, 3000);

  // reveal animation
  window.sr = ScrollReveal();
  sr.reveal('.reveal', { duration: 1000, opacity: 0, easing: 'ease-in-out', mobile: true, scale: 0.8 });

  // heart animation
  var love = setInterval(function () {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 15) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 15) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

    $('.heart').each(function () {
      var top = $(this).css("top").replace(/[^-\d\.]/g, '');
      var width = $(this).css("width").replace(/[^-\d\.]/g, '');
      if (top <= -100 || width >= 150) {
        $(this).detach();
      }
    });
  }, 500);

});