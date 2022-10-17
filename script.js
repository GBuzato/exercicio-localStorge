const main = document.getElementsByTagName('main')[0];
const divBackground = document.querySelector('#btn-background');

function createButton() {
    const buttonGrey = document.createElement('button');
    buttonGrey.style.backgroundColor = 'grey';
    buttonGrey.style.color = 'white';
    buttonGrey.style.width = '40px';
    buttonGrey.style.height = '40px';
    buttonGrey.style.borderRadius = '50%';
    buttonGrey.style.marginTop = '10px';
    buttonGrey.style.border = '1, solid, white';
    buttonGrey.style.margin = '5px';
    divBackground.appendChild(buttonGrey);

    const buttonPink = document.createElement('button');
    buttonPink.style.backgroundColor = 'pink';
    buttonPink.style.color = 'white';
    buttonPink.style.width = '40px';
    buttonPink.style.height = '40px';
    buttonPink.style.borderRadius = '50%';
    buttonPink.style.marginTop = '10px';
    buttonPink.style.border = '1, solid, white';
    buttonPink.style.margin = '5px';
    divBackground.appendChild(buttonPink);

    const buttonBlack = document.createElement('button');
    buttonBlack.style.backgroundColor = 'black';
    buttonBlack.style.color = 'white';
    buttonBlack.style.width = '40px';
    buttonBlack.style.height = '40px';
    buttonBlack.style.borderRadius = '50%';
    buttonBlack.style.marginTop = '10px';
    buttonBlack.style.border = '1, solid, white';
    buttonBlack.style.margin = '5px';
    divBackground.appendChild(buttonBlack);
}
createButton();


function changeBackgroundColor(event) {
    const corBackground = event.target.style.backgroundColor;
    main.style.backgroundColor = corBackground;

    if (corBackground === 'black') {
        main.style.color = 'white';
    }
    else {
        main.style.color = 'black';
    }

    localStorage.setItem('cor de fundo', corBackground);
}

divBackground.addEventListener('click', changeBackgroundColor);

function getBackground() {
    const background = localStorage.getItem('cor de fundo');
    main.style.backgroundColor = background;

    if (background === 'black') {
        main.style.color = 'white';
    }
}

function createButtonsColor() {
    const fontColorH4 = document.querySelector('#font-color');
    const buttonColorRed = document.createElement('button');
    buttonColorRed.style.backgroundColor = 'red';
    buttonColorRed.style.borderRadius = '50%';
    buttonColorRed.style.width = '40px';
    buttonColorRed.style.height = '40px';
    buttonColorRed.style.border = '1, solid, white';
    fontColorH4.appendChild(buttonColorRed);

    const buttonColorWhite = document.createElement('button');
    buttonColorWhite.style.backgroundColor = 'white';
    buttonColorWhite.style.borderRadius = '50%';
    buttonColorWhite.style.width = '40px';
    buttonColorWhite.style.height = '40px';
    buttonColorWhite.style.border = '1, solid, white';
    fontColorH4.appendChild(buttonColorWhite);

    const buttonColorBlack = document.createElement('button');
    buttonColorBlack.style.backgroundColor = 'Black';
    buttonColorBlack.style.borderRadius = '50%';
    buttonColorBlack.style.width = '40px';
    buttonColorBlack.style.height = '40px';
    buttonColorBlack.style.border = '1, solid, white';
    fontColorH4.appendChild(buttonColorBlack);
    
}

window.onload = function loadingFunctions() {
    getBackground();
    createButtonsColor();
};