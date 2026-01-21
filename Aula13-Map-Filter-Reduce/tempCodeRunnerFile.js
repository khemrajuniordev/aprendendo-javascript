//MAP
const distanciaEmKm = distanciaMetros.map(distancia => distancia / 1000);
console.log("Distancia em KM: ", distanciaEmKm);


//filter antigo
const itensFiltrados = distanciaMetros.filter(distancia => {
    if (distancia > 200) return distancia;
})
console.log("Itens filtrados: ", itensFiltrados);