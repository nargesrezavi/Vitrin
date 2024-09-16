
let gameContainer = document.getElementById("game-container");
let circle = document.getElementById("circle");
let statusDisplay = document.getElementById("status");

let gameInterval;
let speed = 1000;

function startGame(level) {
    clearInterval(gameInterval); // Stop any previous game interval
    setSpeed(level); // Set speed based on the level

    statusDisplay.textContent = "Game Started! Catch the circle!";

    gameInterval = setInterval(moveCircle, speed);

    circle.addEventListener('click', winGame);
}

function setSpeed(level) {
    if (level === 'low') {
        speed = 1000; // 1 second interval
    } else if (level === 'moderate') {
        speed = 700; // 0.7 second interval
    } else if (level === 'fast') {
        speed = 400; // 0.4 second interval
    }
}

function moveCircle() {
    let gameWidth = gameContainer.clientWidth;
    let gameHeight = gameContainer.clientHeight;
    let circleSize = circle.clientWidth;

    let newX = Math.random() * (gameWidth - circleSize);
    let newY = Math.random() * (gameHeight - circleSize);

    circle.style.left = `${newX}px`;
    circle.style.top = `${newY}px`;
}

function winGame() {
    clearInterval(gameInterval); // Stop the game
    statusDisplay.textContent = "You caught the circle! You win!";
    circle.removeEventListener('click', winGame);
}

