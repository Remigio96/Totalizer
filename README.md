# ✖️Totalizer✖️

Totalizer es una  web que simula el comportamiento básico de un carrito de compras. Permite al usuario aumentar o disminuir la cantidad de un producto y actualiza automáticamente el precio total según un valor fijo.

## ✅ Objetivo del proyecto

Este proyecto está orientado a la  manipulación del DOM, eventos y control de estado en interfaz web

## ✨ Características

- Cálculo automático del total basado en la cantidad.
- Botones interactivos para añadir y quitar unidades.

## 📚 Tecnologías utilizadas

- **HTML5**: estructura de la interfaz.
- **CSS3**: estilos básicos para la presentación visual.
- **JavaScript**: lógica para interacción y cálculo dinámico.

## ⚖️ Estructura del proyecto

```
Totalizer/
├── assets
│   ├── css
│   │   └── estilos.css       # Estilos visuales
│   ├── img
│   │   └── notebook.png
│   └── js
│       └── index.js          # Lógica de interacción y cálculos
└── index.html                # Interfaz principal
```
## 🧠 ¿Cómo funciona el JavaScript?

El archivo `script.js` maneja toda la lógica del proyecto:

1. Se define un **precio fijo** por unidad del producto:
```js
const precio = 400000;
```

2. Se capturan los elementos clave del DOM (precio, cantidad, total y botones).
3. Se inicializan los valores visibles en pantalla.

4. La función `modificarCantidad(cambioCantidad)` permite **sumar o restar** unidades:
```js
function modificarCantidad(cambioCantidad) {
  let cantidadActual = Number(cantidadSpan.innerHTML);
  let nuevaCantidad = cantidadActual + cambioCantidad;

  if (nuevaCantidad < 0) return;

  cantidadSpan.innerHTML = nuevaCantidad;
  totalSpan.innerHTML = nuevaCantidad * precio;
}
```
5. Finalmente, se asignan eventos a los botones para modificar la cantidad:
```js
btnAñadir.onclick = () => modificarCantidad(1);
btnQuitar.onclick = () => modificarCantidad(-1);
```


## 🔧 Cómo usar

1. Descarga o clona este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Usa los botones de "Agregar" o "Quitar" para modificar la cantidad.
4. Observa cómo el total se actualiza en tiempo real.
   
#
![image 1](https://github.com/user-attachments/assets/3ed93d71-cc4f-4c03-b1a9-754a3cb98a29)
#

### 🔁 Clonar el repositorio

```bash
git clone https://github.com/Remigio96/Totalizer.git
```

### 🚀 Visualización en GitHub Pages

➡️ [https://remigio96.github.io/Totalizer](https://remigio96.github.io/Totalizer)



---

Desarrollado por Remigio Stocker.
