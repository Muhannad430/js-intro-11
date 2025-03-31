/*
-Create a class called as HeroPlayer and inherit the Player class
-Create a constructor for this class which takes 2 arguments: 
    nickName
    score
    -Inherit the Player class constructor and the other methods
-Create a method called as heal() which takes a player object as argument and 
increases the healed player's score by 1.
*/

const player = require("./player");

class HeroPlayer extends player {
    constructor(nickName, score) {
        super(nickName, score);
    }
    heal(healedPlayer) {
        healedPlayer.score += 1;
    }
}

const player = require('./Book');
const superPlayer = require('./Author');

const player1 = new player('Player 1', 5);
const player2 = new player('Player 2', 5);

let player01