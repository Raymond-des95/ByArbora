window.addEventListener('load', () => {
    const arboraText = document.getElementById('arbora-text');
    const sloganText = document.getElementById('slogan-text');

    // Eerst Arbora tonen met fade-in
    arboraText.style.transition = 'opacity 1.5s ease-in';
    arboraText.style.opacity = '1';

    // Na 1.8 seconde de slogan tonen met fade-in
    setTimeout(() => {
        sloganText.style.transition = 'opacity 1.5s ease-in';
        sloganText.style.opacity = '1';
    }, 1800);
});
