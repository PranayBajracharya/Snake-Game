import { draw as drawSnake, update as updateSnake, SnakeSpeed } from './snake.js';


let lastRender = 0;
const gameBoard = document.getElementById('gameBoard');

function main (currentTime) {
    requestAnimationFrame(main);
    const RenderTime = (currentTime - lastRender) / 1000;

    if(RenderTime < 1 / SnakeSpeed) return ;

    lastRender = currentTime;

    update();
    draw();
}

requestAnimationFrame(main);

function update() {
    updateSnake();
}
function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
}