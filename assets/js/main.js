const carrossel = document.querySelector('.grade-cards-pequenos');
const botoesPaginacao = document.querySelectorAll('.pag-btn');

botoesPaginacao.forEach((btn) => {
    btn.addEventListener('click', () => {
        const direcao = Number(btn.dataset.dir);
        carrossel.scrollBy({ left: direcao * 200, behavior: 'smooth' });

        botoesPaginacao.forEach((b) => b.classList.remove('pag-ativo'));
        btn.classList.add('pag-ativo');
    });
});

document.querySelectorAll('.card-aula, .card-pequeno').forEach((card) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        window.location.href = './curso.html';
    });
});
