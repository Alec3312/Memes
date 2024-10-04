document.addEventListener('DOMContentLoaded', function () {
    // Selección de elementos
    const categoria = document.getElementById('categoria');
    const imagen = document.getElementById('imagen');
    const mensaje = document.getElementById('mensaje');
    const creador = document.getElementById('creador');
    const colorMargen = document.getElementById('color-margen-input');
    const colorMensaje = document.getElementById('color-mensaje-input');
    const colorCreador = document.getElementById('color-creador-input');
    const botonGenerar = document.getElementById('generar-meme');
    const memeGenerado = document.getElementById('meme-generado');
    const imagenMeme = document.getElementById('imagen-meme');
    const textoMeme = document.getElementById('texto-meme');
    const nombreCreador = document.getElementById('nombre-creador');
    const botonArriba = document.getElementById('mover-arriba');
    const botonAbajo = document.getElementById('mover-abajo');
    const botonIzquierda = document.getElementById('mover-izquierda');
    const botonDerecha = document.getElementById('mover-derecha');

    // Imágenes por categoría
    const imagenesPorCategoria = {
        gracioso: ['img/gracioso1.jpg', 'img/gracioso2.jpg', 'img/gracioso3.jpg'],
        motivacional: ['img/motivacional1.jpg', 'img/motivacional2.jpg', 'img/motivacional3.jpg'],
        sarcastico: ['img/sarcastico1.jpg', 'img/sarcastico2.jpg', 'img/sarcastico3.jpg']
    };

    // Variables para controlar la posición del texto
    let topPos = 10; // Porcentaje
    let leftPos = 10; // Porcentaje

    // Función para actualizar las imágenes según la categoría seleccionada
    categoria.addEventListener('change', function () {
        const categoriaSeleccionada = categoria.value;
        const imagenes = imagenesPorCategoria[categoriaSeleccionada];

        // Limpiar las opciones anteriores
        imagen.innerHTML = '';

        // Agregar las nuevas opciones de imagen
        imagenes.forEach(function (img) {
            const option = document.createElement('option');
            option.value = img;
            option.textContent = img.split('/').pop();  // Mostrar solo el nombre de la imagen sin la ruta
            imagen.appendChild(option);
        });
    });

    // Función anónima para generar el meme
    botonGenerar.addEventListener('click', function () {
        // Cambiar imagen del meme
        const rutaImagen = imagen.value;
        imagenMeme.src = rutaImagen;

        // Colocar texto y nombre del creador
        textoMeme.textContent = mensaje.value;
        nombreCreador.textContent = `Creado por: ${creador.value}`;

        // Cambiar color del borde
        memeGenerado.style.borderColor = colorMargen.value;

        // Cambiar color del texto del mensaje y creador
        textoMeme.style.color = colorMensaje.value;
        nombreCreador.style.color = colorCreador.value;

        // Mostrar el meme generado
        memeGenerado.style.display = 'block';

        // Asignar clase para animación
        textoMeme.classList.add('animated');
    });

    // Funciones para mover el texto del meme
    botonArriba.addEventListener('click', function () {
        topPos = Math.max(0, topPos - 5);
        textoMeme.style.top = topPos + '%';
    });

    botonAbajo.addEventListener('click', function () {
        topPos = Math.min(90, topPos + 5);
        textoMeme.style.top = topPos + '%';
    });

    botonIzquierda.addEventListener('click', function () {
        leftPos = Math.max(0, leftPos - 5);
        textoMeme.style.left = leftPos + '%';
    });

    botonDerecha.addEventListener('click', function () {
        leftPos = Math.min(90, leftPos + 5);
        textoMeme.style.left = leftPos + '%';
    });

    // Disparar el cambio de categoría inicial para cargar las imágenes de la primera categoría
    categoria.dispatchEvent(new Event('change'));
});
