const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    console.log('Гамбит Пуз');
    burger.classList.toggle('open');
})