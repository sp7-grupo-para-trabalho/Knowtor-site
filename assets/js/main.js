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
