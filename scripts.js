window.addEventListener('DOMContentLoaded', () => {
    const arboraText = document.getElementById('arbora-text');
    const sloganText = document.getElementById('slogan-text');

    setTimeout(() => {
        arboraText.style.opacity = 1;
        arboraText.style.transition = 'opacity 1s ease-in';
    }, 500);

    setTimeout(() => {
        sloganText.style.opacity = 1;
        sloganText.style.transition = 'opacity 1s ease-in';
    }, 1500);
});
