'use strict';
console.log('Script loaded')

const startGame = ()=>{
    const registerBlock = document.querySelector('#nik');
    const gameBlock = document.querySelector('#game');
    const frame = gameBlock.querySelector('iframe');

    frame.src = 'https://www.jigsawplanet.com/?rc=play&amp;pid=0462b93274f2&amp;view=iframe&amp;bgcolor=0x808080';
    frame.style = 'width:100%;height:600px';

    registerBlock.classList.add('hidden');
    gameBlock.classList.remove('hidden');
}

const start = ()=>{
    const btnStart = document.querySelector('#startGame')
    btnStart.addEventListener('click',startGame)
}

document.addEventListener('DOMContentLoaded',()=>{
    console.log(`Document Loaded`);
    start();
})