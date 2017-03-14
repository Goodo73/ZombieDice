$(function() {

    $('html').removeClass('no-js').addClass('js');

});

// Obtain a random number between min & max (inclusive)
function getRandomNumber (min,max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}
