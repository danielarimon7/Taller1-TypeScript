import { Series } from './Data.js';

let tbodySeries = document.getElementById("tbodySeries");
let totalTemporadas = 0;

addSeries();
calcularPromedio(totalTemporadas, Series.length);

function addSeries() {
    
    Series.forEach((serie) => {
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>
    `;
    
    tbodySeries.appendChild(row); 
    totalTemporadas += serie.temporadas;
    });
}

function calcularPromedio(total, cantidadSeries) {
    let promedio = total / cantidadSeries
    let row = document.createElement("tr");

    row.innerHTML = `
        <td colspan="2">Promedio temporadas: ${promedio.toPrecision(1)}</td>
    `;

    tbodySeries.appendChild(row);
}

