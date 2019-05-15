// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    //Reset position of enemy to move across again
    if (this.x > 515) {
        this.x = -60;
        this.speed = 100 + Math.floor(Math.random() * 400);
    }
    // Check for collision between player and enemies
    if (player.x < this.x + 70 && player.x + 70 > this.x &&
        player.y < this.y + 50 && 50 +  player.y > this.y) {
        player.x = 201;
        player.y = 406;
		alert('Oops. Try again');
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';
};

Player.prototype.update = function() {
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {
    if(keyPress == 'left' && this.x > 10) {
		this.x -= 100;
	}
    if(keyPress == 'right' && this.x < 400) {
		this.x += 100;
	}
	if(keyPress == 'up' && this.y > 0) {
		this.y -= 84;
	}
	if(keyPress == 'down' && this.y < 400) {
		this.y += 84;
	}
	if(this.y < 0){
		setTimeout(() => {
			this.x = 201;
			this.y = 406;
		},800);
		alert( 'Congratulations You won!');
	}
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];

var player = new Player(201, 406);
var locationOfEnemy = [64, 145, 225];


locationOfEnemy.forEach(function(locationOfY) {
    enemy = new Enemy(0, locationOfY, 100 + Math.floor(Math.random() * 220));
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
