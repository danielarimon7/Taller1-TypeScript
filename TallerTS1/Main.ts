import { Series } from './Data.js';

let tbodySeries: HTMLElement = document.getElementById("tbodySeries")!;
let totalTemporadas = 0; 

addSeries();
calcularPromedio(totalTemporadas, Series.length);

function addSeries():void {
    
    Series.forEach((serie) => {
    let row: HTMLElement = document.createElement("tr");

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

function calcularPromedio(total:number, cantidadSeries:number) {
    let promedio:number = total / cantidadSeries
    let row: HTMLElement = document.createElement("tr");

    row.innerHTML = `
        <td colspan="2">Promedio temporadas: ${promedio}</td>
    `;

    tbodySeries.appendChild(row);
}
