$(function() {

    $('html').removeClass('no-js').addClass('js');

    var dieTypes = [
        {
            color: 'green',
            sides: ['brain','run','brain','bang','run','brain']
        },
        {
            color: 'yellow',
            sides: ['brain','run','bang','bang','run','brain']
        },
        {
            color: 'red',
            sides: ['bang','run','bang','bang','run','brain']
        }
    ];
});

// Obtain a random number between min & max (inclusive)
function getRandomNumber (min,max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}