const btn_1 = document.querySelector('#btn_1');
const btn_2 = document.querySelector('#btn_2');
const btn_3 = document.querySelector('#btn_3');
const btn_4 = document.querySelector('#btn_4');
const reset = document.querySelector('#btn_reset');
const container = document.querySelector('.container');

function getMarginX() {
    let halfWindow = window.innerWidth / 2;
    let halfContainer = parseInt(container.style.width) / 2;
    let marginX = halfWindow - halfContainer;
    return marginX + 'px';
}

function getMarginY() {
    let halfWindow = window.innerHeight / 2;
    let halfContainer = parseInt(container.style.height) / 2;
    let marginY = halfWindow - halfContainer;
    return marginY + 'px';
}

function initial_style() {
    container.style.backgroundColor = 'blue';
    container.style.height = '400px';
    container.style.width = '400px';
    container.style.marginTop = getMarginY();
    container.style.marginBottom = getMarginY();
    container.style.marginLeft = getMarginX();
    container.style.marginRight = getMarginX();
}

initial_style();

function move(event) {
    if (event.key == 'ArrowDown') {
        if (parseInt(container.style.marginBottom) > 10) {
            container.style.marginBottom = (parseInt(container.style.marginBottom) - 10) + 'px';
            container.style.marginTop = (parseInt(container.style.marginTop) + 10) + 'px';
        } else {
            alert('You cannot go further in this direction.');
        }
    } else if (event.key == 'ArrowUp') {
        if (parseInt(container.style.marginTop) > 10) {
            container.style.marginTop = (parseInt(container.style.marginTop) - 10) + 'px';
            container.style.marginBottom = (parseInt(container.style.marginBottom) + 10) + 'px';
        } else {
            alert('You cannot go further in this direction.');
        }
    } else if (event.key == 'ArrowLeft') {
        if (parseInt(container.style.marginLeft) > 10) {
            container.style.marginLeft = (parseInt(container.style.marginLeft) - 10) + 'px';
            container.style.marginRight = (parseInt(container.style.marginRight) + 10) + 'px';
        } else {
            alert('You cannot go further in this direction.');
        }
    } else if (event.key == 'ArrowRight') {
        if (parseInt(container.style.marginRight) > 10) {
            container.style.marginRight = (parseInt(container.style.marginRight) - 10) + 'px';
            container.style.marginLeft = (parseInt(container.style.marginLeft) + 10) + 'px';
        } else {
            alert('You cannot go further in this direction.');
        }
    }
}

function increaseHeight() {
    if (parseInt(container.style.height) <= (0.9 * window.innerHeight - parseInt(container.style.marginTop))) {
        container.style.height = 1.1 * parseInt(container.style.height) + 'px';
        container.style.marginTop = getMarginY();
    } else {
        alert('You have reached growth limit.');
    }
}

function turnAfpaGreen() {
    container.style.backgroundColor = '#86BD25';
}

function hideContainer() {
    container.style.visibility = 'hidden';
    btn_4.style.visibility = 'visible';
}

function showContainer() {
    container.style.visibility = 'visible';
}

btn_1.addEventListener('click', increaseHeight);
btn_2.addEventListener('click', turnAfpaGreen);
btn_3.addEventListener('click', hideContainer);
btn_4.addEventListener('click', showContainer);

reset.addEventListener('click', initial_style);

document.addEventListener('keydown', move);