let plug = document.querySelector('.header__plugins');

document.querySelector('.header_item-plagins').addEventListener('click', () => {
plug.style.display = getComputedStyle(plug).display == 'flex' ? 'none' : 'flex';
});

let them = document.querySelector('.header__themes');

document.querySelector('.header_item-themes').addEventListener('click', () => {
them.style.display = getComputedStyle(them).display == 'flex' ? 'none' : 'flex';
});


