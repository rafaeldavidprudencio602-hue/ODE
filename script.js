// Variables del carrito
let carrito = [];
let totalCarrito = 0;

// Función para actualizar el carrito
function actualizarCarrito() {
    const carritoLista = document.getElementById("carrito-lista");
    const total = document.getElementById("total-carrito");
    
    carritoLista.innerHTML = '';  // Limpiar la lista del carrito

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;

        // Crear el botón de eliminar
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', () => eliminarDelCarrito(index));

        li.appendChild(eliminarBtn);
        carritoLista.appendChild(li);
    });

    total.textContent = totalCarrito;
}

// Función para agregar un plan al carrito
const botonesAgregar = document.querySelectorAll('.agregar-plan');
botonesAgregar.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const nombre = e.target.getAttribute('data-plan');
        const precio = parseInt(e.target.getAttribute('data-price'));
        const descripcion = e.target.getAttribute('data-description');
        const incluye = e.target.getAttribute('data-includes');

        // Agregar el plan al carrito
        carrito.push({ nombre, precio, descripcion, incluye });
        totalCarrito += precio;
        actualizarCarrito();
        document.getElementById("carrito-total").textContent = carrito.length;

        // Mostrar el cuadro emergente con los detalles
        document.getElementById("detalle-plan-nombre").textContent = nombre;
        document.getElementById("detalle-plan-precio").textContent = precio;
        document.getElementById("detalle-plan-descripcion").textContent = descripcion;
        document.getElementById("detalle-plan-includes").textContent = incluye;

        // Mostrar el modal con animación
        document.getElementById("detalle-plan-modal").style.display = 'flex';
    });
});

// Función para eliminar un plan del carrito
function eliminarDelCarrito(index) {
    // Eliminar el plan del carrito
    totalCarrito -= carrito[index].precio;
    carrito.splice(index, 1);

    // Actualizar el carrito visualmente
    actualizarCarrito();

    // Actualizar el número de elementos en el icono del carrito
    document.getElementById("carrito-total").textContent = carrito.length;
}

// Cerrar el cuadro de detalles
document.getElementById("cerrar-detalle").addEventListener('click', () => {
    document.getElementById("detalle-plan-modal").style.display = 'none';
});

// Abrir el carrito
document.getElementById("carrito-btn").addEventListener('click', () => {
    document.getElementById("carrito-modal").style.display = 'flex';
});

// Cerrar el carrito
document.getElementById("cerrar-carrito").addEventListener('click', () => {
    document.getElementById("carrito-modal").style.display = 'none';
});

// Abrir el modal de pago
document.getElementById("pagar").addEventListener('click', () => {
    document.getElementById("pago-modal").style.display = 'flex';
    document.getElementById("total-pago").textContent = totalCarrito;
});

// Cerrar el modal de pago
document.getElementById("cerrar-pago").addEventListener('click', () => {
    document.getElementById("pago-modal").style.display = 'none';
});

// Simulación de pago con los botones
const botonesPago = document.querySelectorAll('.btn-pago');
botonesPago.forEach(btn => {
    btn.addEventListener('click', () => {
        alert("¡Pago exitoso! (simulado)");
        document.getElementById("pago-modal").style.display = 'none';
    });
});
