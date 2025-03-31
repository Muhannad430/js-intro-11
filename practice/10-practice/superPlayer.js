/*
-Create a class called as SuperPlayer and inherit the Player class
-Create a constructor for this class which takes 2 arguments: 
    nickName
    score
    -Inherit the Player class constructor and the other methods
-Create a method called as superAttack() which takes a player object as argument and 
increases the attacking player's score by 2 while it decreases the attacked player's score by 2
*/

const player = require("./player");

class superPlayer extends player {
    
    constructor(nickName, score){
        super(nickName, score)
    }
    superAttack(player){
        return this.score + 2, this.attack - 2; 
    }
}

module.exports = superPlayer;

