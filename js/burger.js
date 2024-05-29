const handleBurgerButtonClick = () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerButton = document.querySelector('.burger-button');

    burgerMenu.classList.toggle('active');

    if (burgerMenu.classList.contains('active')) {
        burgerMenu.style.animation = 'appear 0.2s ease-out forwards';
        burgerMenu.style.display = 'flex';
        burgerButton.classList.add('active');
    } else {
        burgerMenu.style.animation = 'disappear 0.2s ease-out forwards';
        burgerMenu.addEventListener('animationend', () => {
            if (!burgerMenu.classList.contains('active')) {
                burgerMenu.style.display = 'none';
                burgerMenu.style.animation = '';
                burgerButton.classList.remove('active');
            }
        }, {once: true});
    }
}
