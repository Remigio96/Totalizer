// Precio inicial
const precio = 400000;

// Elementos del DOM
const precioSpan = document.querySelector('.precio-inicial');
const cantidadSpan = document.querySelector('.cantidad');
const totalSpan = document.querySelector('.valor-total');
const btnAñadir = document.querySelector('#btn-añadir');
const btnQuitar = document.querySelector('#btn-quitar');

// Inicializar valores visibles
precioSpan.innerHTML = precio;
cantidadSpan.innerHTML = 0;
totalSpan.innerHTML = 0;

// Función actualizar cantidad
function modificarCantidad(cambioCantidad) {
  let cantidadActual = Number(cantidadSpan.innerHTML);
  let nuevaCantidad = cantidadActual + cambioCantidad;

  if (nuevaCantidad < 0) return;

  cantidadSpan.innerHTML = nuevaCantidad;
  totalSpan.innerHTML = nuevaCantidad * precio;
}

// Asignación de eventos
btnAñadir.onclick = () => modificarCantidad(1);
btnQuitar.onclick = () => modificarCantidad(-1);