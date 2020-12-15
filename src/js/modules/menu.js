export default () => {
    let menuBtn = document.querySelector('#menuBtn');
    let menuNav = document.querySelector('#nav');

    menuBtn.onclick = () => {
        menuBtn.classList.toggle('header__button--active');
        menuNav.classList.toggle('navigation--active')
    }
}
