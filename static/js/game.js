const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
let player;
let aliens = [];
let bullets = [];
let alienBullets = [];
let score = 0;
let gameOver = false;

// Player
class Player {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = 5;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move(direction) {
        if (direction === 'left' && this.x > 0) {
            this.x -= this.speed;
        } else if (direction === 'right' && this.x < canvas.width - this.width) {
            this.x += this.speed;
        }
    }
}

// Bullet
class Bullet {
    constructor(x, y, width, height, color, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.y += this.speed;
    }
}

// Alien
class Alien {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Game initialization
function init() {
    player = new Player(canvas.width / 2 - 25, canvas.height - 60, 50, 20, '#00ff00');
    createAliens();
    gameLoop();
}

// Create aliens
function createAliens() {
    aliens = [];
    const alienRows = 5;
    const alienCols = 10;
    const alienWidth = 40;
    const alienHeight = 20;
    const alienPadding = 10;
    const alienOffsetTop = 30;
    const alienOffsetLeft = 30;

    for (let c = 0; c < alienCols; c++) {
        for (let r = 0; r < alienRows; r++) {
            let alienX = (c * (alienWidth + alienPadding)) + alienOffsetLeft;
            let alienY = (r * (alienHeight + alienPadding)) + alienOffsetTop;
            aliens.push(new Alien(alienX, alienY, alienWidth, alienHeight, '#ff0000'));
        }
    }
}

// Game loop
function gameLoop() {
    if (gameOver) {
        ctx.fillStyle = 'white';
        ctx.font = '48px sans-serif';
        ctx.fillText('Game Over', canvas.width / 2 - 120, canvas.height / 2);
        return;
    }

    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Update game objects
function update() {
    // Player bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].update();
        if (bullets[i].y < 0) {
            bullets.splice(i, 1);
        }
    }

    // Alien movement and collision with bullets
    for (let i = aliens.length - 1; i >= 0; i--) {
        for (let j = bullets.length - 1; j >= 0; j--) {
            if (
                bullets[j].x > aliens[i].x &&
                bullets[j].x < aliens[i].x + aliens[i].width &&
                bullets[j].y > aliens[i].y &&
                bullets[j].y < aliens[i].y + aliens[i].height
            ) {
                aliens.splice(i, 1);
                bullets.splice(j, 1);
                score += 10;
            }
        }
    }
}

// Draw game objects
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();

    for (const bullet of bullets) {
        bullet.draw();
    }

    for (const alien of aliens) {
        alien.draw();
    }

    // Score
    ctx.fillStyle = 'white';
    ctx.font = '24px sans-serif';
    ctx.fillText(`Score: ${score}`, 10, 20);
}

// Keyboard input
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        player.move('left');
    } else if (e.key === 'ArrowRight') {
        player.move('right');
    } else if (e.key === ' ') {
        bullets.push(new Bullet(player.x + player.width / 2 - 2.5, player.y, 5, 10, '#ffff00', -7));
    }
});

init();
