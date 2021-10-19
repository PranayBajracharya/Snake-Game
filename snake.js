import { keys as input } from './input.js';
export const SnakeSpeed = 5;

const SnakeBody = [
    { x:11, y:11 },
    { x:11, y:12 }
];

export function update() {
    const inputdirection = input();
    for(let i = SnakeBody.length - 2; i >= 0; i--) {
        SnakeBody[i+1] = { ...SnakeBody[i] };
    }
    SnakeBody[0].x += inputdirection.x;
    SnakeBody[0].y += inputdirection.y;
    if(SnakeBody[0].x == 0 || SnakeBody[0].x == 22 || SnakeBody[0].y == 0 || SnakeBody[0].y == 22)
        alert('gg');
}

export function draw(gameBoard) {
    SnakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}