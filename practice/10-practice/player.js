/*
-Create a class called as Player
-Create a constructor for this class which takes 2 arguments: 
    nickName
    score
-Create a method called as getInfo() which returns the score for the player object info in the format: {nickName}'s score is {score}.
-Create a method called as attack() which takes a player object as argument and 
increases the attacking player's score by 1 while it decreases the attacked player's score by 1
-Create a method called as damage() which decreases the score of the player object by 1
*/

class player {
    constructor(nickName, score) {
        this.nickName = nickName
        this.score = score
    }

    getInfo() {
        return `${this.nickName}'s score is ${this.score}`;
    }

    attack(attackedPlayer) {
        return this.score += 2;
    }

    damage() {
        return this.score -= 1;
    }
}

module.exports = player



/*
Create 2 player objects with below information
player1 = { nickName: 'Player 1', score: 5 }
player2 = { nickName: 'Player 2', score: 5 }

Create a superPlayer object with below information
superPlayer = { nickName: 'Super Player', score: 3 }

Create a heroPlayer object with below information
heroPlayer = { nickName: 'Hero Player', score: 10 }
*/


const player1 = new player('Player 1', 5);
const player2 = new player('Player 2', 5);