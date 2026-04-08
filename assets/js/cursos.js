const PASSO = 170;

document.querySelectorAll('.seta-carrossel').forEach((btn) => {
    btn.addEventListener('click', () => {
        const id = `carrossel-${btn.dataset.alvo}`;
        const lista = document.getElementById(id);
        if (!lista) return;
        lista.scrollBy({ left: Number(btn.dataset.dir) * PASSO, behavior: 'smooth' });
    });
});

document.querySelectorAll('.card-aula, .card-curso').forEach((card) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        window.location.href = './curso.html';
    });
});
