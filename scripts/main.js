$(function() {

    $('html').removeClass('no-js').addClass('js');

    var dieType = {
        'green': ['brain','run','brain','bang','run','brain'],
        'yellow': ['brain','run','bang','bang','run','brain'],
        'red': ['bang','run','bang','bang','run','brain']
    };

    var die = new Die('green');
    var colour = die.getDieColour();
    console.log(colour);
    var face = die.getDieFace();
    console.log(face);
    var type = dieType[colour][3]
    console.log(type);
    die.setDieFace(type);
    console.log(die.getDieFace());
    die.resetDieFace();
    console.log(die.getDieFace());
});

// Obtain a random number between min & max (inclusive)
function getRandomNumber (min,max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

function Die (colour) {
    this.colour = colour;
    this.currentDieFace = null;
    this.resetDieFace = function() {
        this.currentDieFace = null;
    };
    this.setDieFace = function(face) {
        this.currentDieFace = face;
    };
    this.getDieFace = function() {
        return this.currentDieFace;
    };
    this.getDieColour = function() {
        return this.colour;
    };
}