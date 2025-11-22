// ===== Scroll suave en la navegación =====
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.querySelector(link.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== Mostrar detalles al hacer clic en tarjetas =====
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const target = card.getAttribute('data-target');
        const detalle = document.getElementById(target);

        // Ocultar otros detalles
        document.querySelectorAll('.detalle').forEach(d => d.style.display = 'none');

        // Mostrar el detalle correspondiente
        if (detalle) detalle.style.display = 'block';

        detalle.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== Animaciones al hacer scroll =====
const elementos = document.querySelectorAll('.section, .card');

function mostrarElementos() {
    const trigger = window.innerHeight * 0.85;

    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', mostrarElementos);
mostrarElementos();

// ===== Botón flotante "Volver arriba" =====
const btnArriba = document.createElement('div');
btnArriba.id = "btnArriba";
btnArriba.innerText = "↑";
document.body.appendChild(btnArriba);

btnArriba.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnArriba.style.opacity = '1';
        btnArriba.style.pointerEvents = 'auto';
    } else {
        btnArriba.style.opacity = '0';
        btnArriba.style.pointerEvents = 'none';
    }
});
