const moreBtn = document.querySelector('.info .metadate .moreBtn');
const title = document.querySelector('.info .metadata .title ');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});