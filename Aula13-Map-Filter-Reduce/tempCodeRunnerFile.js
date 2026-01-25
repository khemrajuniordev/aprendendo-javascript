// ==========================
// MAP
// ==========================

// Aqui estamos criando uma nova constante chamada distanciaEmKm.
// Ela vai armazenar um NOVO array, sem alterar o array original distanciaMetros.
const distanciaEmKm = distanciaMetros.map(distancia => 
    // O método map percorre cada item do array distanciaMetros.
    // A cada volta, ele pega um valor e chama ele de "distancia".
    
    distancia / 1000
    // Aqui estamos convertendo metros para quilômetros.
    // Exemplo da vida real:
    // Se a distancia for 1500 metros, ao dividir por 1000 vira 1.5 km.
);

// Exibe no console o texto "Distancia em KM:" junto com o novo array convertido.
console.log("Distancia em KM: ", distanciaEmKm);



// ==========================
// FILTER (modo antigo / mais verboso)
// ==========================

// Aqui criamos uma constante chamada itensFiltrados.
// Ela vai guardar apenas alguns valores do array distanciaMetros.
const itensFiltrados = distanciaMetros.filter(distancia => {
    // O filter também percorre o array inteiro.
    // A cada volta, ele pega um valor e chama de "distancia".

    if (distancia > 200) return distancia;
    // Essa condição funciona como um "porteiro":
    // - Se a distancia for MAIOR que 200, ela passa e entra no novo array.
    // - Se for MENOR ou IGUAL a 200, ela é ignorada.
    
    // Exemplo da vida real:
    // Imagine uma lista de corridas.
    // Só entram na lista final as corridas com mais de 200 metros.
})

// Mostra no console apenas as distâncias que passaram no filtro.
console.log("Itens filtrados: ", itensFiltrados);
