import { Series } from './Data.js';

let tbodySeries: HTMLElement = document.getElementById("tbodySeries")!;


addSeries();

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
});
}

