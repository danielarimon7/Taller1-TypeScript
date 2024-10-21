import { Series } from './Data.js';

let tbodySeries = document.getElementById("tbodySeries");

addSeries();


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
    });
}

