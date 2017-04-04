$(function() {

    $('html').removeClass('no-js').addClass('js');

    var greenDice = 6;
    var yellowDice = 4;
    var redDice = 3;

    var dieType = {
        'green': ['brain','run','brain','bang','run','brain'],
        'yellow': ['brain','run','bang','bang','run','brain'],
        'red': ['bang','run','bang','bang','run','brain']
    };

    var cup = new Cup();

    var newDice = createDice('green',greenDice);
    cup.addDice(newDice);

    newDice = createDice('yellow',yellowDice);
    cup.addDice(newDice);

    newDice = createDice('red',redDice);
    cup.addDice(newDice);

    cup.shakeCup();

    console.log(cup.getContents());
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
    this.contents = [];
    this.addDice = function(dice) {
        for (var i = 0; i < dice.length; i++) {
            this.contents.push(dice[i]);
        }
    };
    this.getContents = function() {
        return this.contents;
    };
    this.shakeCup = function() {
        for (var j, x, i = this.contents.length; i; j = parseInt(Math.random() * i), x = this.contents[--i], this.contents[i] = this.contents[j], this.contents[j] = x);
    };
}
