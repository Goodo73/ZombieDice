$(function() {

    $('html').removeClass('no-js').addClass('js');

    var dieType = {
        'green': ['brain','run','brain','bang','run','brain'],
        'yellow': ['brain','run','bang','bang','run','brain'],
        'red': ['bang','run','bang','bang','run','brain']
    };

    // var die = new Die('green');
    // var colour = die.getColour();
    // console.log(colour);
    // var face = die.getFace();
    // console.log(face);
    // var type = dieType[colour][3]
    // console.log(type);
    // die.setFace(type);
    // console.log(die.getFace());
    // die.resetFace();
    // console.log(die.getFace());

    // var p1 = new Player('Mike');
    // var p1Name = p1.getName();
    // console.log(p1Name);

    // var cup = new Cup();
    // cup.addDie(new Die('green'));
    // cup.addDie(new Die('yellow'));
    // cup.addDie(new Die('red'));
    // cup.shakeCup();
});

// Obtain a random number between min & max (inclusive)
function getRandomNumber(min,max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

// Accept a die colour and number of dice to create
// Returns an array of the created dice
function createDice(colour, amount) {
    var dice = [];

    for (var i = 0; i < amount; i++) {
        dice.push(new Die(colour));
    };

    return dice;
}

function Die(colour) {
    this.colour = colour;
    this.currentFace = null;
    this.resetFace = function() {
        this.currentFace = null;
    };
    this.setFace = function(face) {
        this.currentFace = face;
    };
    this.getFace = function() {
        return this.currentFace;
    };
    this.getColour = function() {
        return this.colour;
    };
}

function Player(name) {
    this.name = name;
    this.getName = function() {
        return this.name;
    };
}

function Cup() {
    this.currentDice = [];
    this.addDie = function(die) {
        this.currentDice.push(die);
    };
    this.getCurrentDice = function() {
        return this.currentDice;
    };
    this.shakeCup = function() {
        for (var j, x, i = this.currentDice.length; i; j = parseInt(Math.random() * i), x = this.currentDice[--i], this.currentDice[i] = this.currentDice[j], this.currentDice[j] = x);
    };
}
