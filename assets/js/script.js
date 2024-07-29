// Declaramos el estado inicial, que consiste en un array de 5 filas y 5 columnas
let tablaState = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
];

// Renderizamos la tabla según su estado actual
function renderTabla() {
    const tabla = document.getElementById('tabla');
    tabla.innerHTML = ''; 

    for (let i = 0; i < tablaState.length; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < tablaState[i].length; j++) {
            const celda = document.createElement('td');
            celda.className = 'celda';
            if (tablaState[i][j]) {
                celda.classList.add('off');
            }
            celda.addEventListener('click', () => {
                toggleCelda(i, j);
            });
            row.appendChild(celda);
        }
        tabla.appendChild(row);
    }
}

/**
 * Cambia el estado de la celda clickeada y sus celdas adyacentes en la matriz `tablaState`.
 * Si la celda está apagada, la enciende; si está encendida, la apaga. Además, cambia el estado
 * de las celdas adyacentes (arriba, abajo, izquierda, derecha) en la matriz.
 * 
 * @param {number} i - Índice de fila de la celda clickeada.
 * @param {number} j - Índice de columna de la celda clickeada.
 * 
 * @returns {void}
 */

// Función para cambiar el estado de la celda clickeada y sus adyacentes
function toggleCelda(i, j) {
    // Cambia el estado de la celda clickeada:
    tablaState[i][j] = !tablaState[i][j];
    
    // Cambia el estado de sus adyacentes:
    if (i > 0) { // Arriba
        tablaState[i - 1][j] = !tablaState[i - 1][j];
    }
    if (i < tablaState.length - 1) { // Abajo
        tablaState[i + 1][j] = !tablaState[i + 1][j];
    }
    if (j > 0) { // Izquierda
        tablaState[i][j - 1] = !tablaState[i][j - 1];
    }
    if (j < tablaState[i].length - 1) { // Derecha
        tablaState[i][j + 1] = !tablaState[i][j + 1];
    }
    
    // Se vuelve a renderizar la tabla con el nuevo estado
    renderTabla();
}

// Inicializar la tabla renderizando por primera vez
renderTabla();
