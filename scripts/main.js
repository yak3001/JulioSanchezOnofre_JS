//CONSTRUCCION CLASE

class ProcesoElectoral {
    constructor(presupuestoPrevio, presupuestoActual, presupuestoPartidos, votos, listaNominal) {
        this.presupuestoPrevio = presupuestoPrevio.value;
        this.presupuestoActual = presupuestoActual.value;
        this.presupuestoPartidos = presupuestoPartidos.value;
        this.votos = votos.value;
        this.listaNominal = listaNominal.value;
    }

    participacion() {
        return ((this.votos / this.listaNominal) * 100).toFixed(2);
    }

    presupuestoElecciones() {
        return this.presupuestoPrevio + this.presupuestoActual + this.presupuestoPartidos;
    }

    costoVoto() {

        return (this.presupuestoElecciones() / this.votos).toFixed(2);
    }

}

//ARRAY Lista procesos electorales analizados

const procesosElectorales = [2015, 2018, 2021];
procesosElectorales.push(2012); //Agregando un elemento al array

procesosElectorales.sort((a, b) => { //Ordenando el array
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
})

//ACCESO ARRAY
for (let index = 0; index < procesosElectorales.length; index++) {
    console.log(procesosElectorales[index]);
}
console.log(typeof procesosElectorales[0]);
console.log(`Número de Procesos Electorales analizados: ${procesosElectorales.length}`);
console.log(`Procesos Electorales analizados: ${procesosElectorales.toString()}`);

//ARRAY Presupuesto Previo
const presupuestoPrevio = [
    { name: '2015', value: 539799052 },
    { name: '2018', value: 699534390 },
    { name: '2021', value: 479250873 },
];

presupuestoPrevio.push({ name: '2012', value: 590063700 }); //agregando un elemento al array  
presupuestoPrevio.sort((a, b) => { //Ordenando el array
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});

console.log('Presupuesto del año anterior al Proceso Electoral analizado:', presupuestoPrevio);
document.write("<h3>Presupuesto del año anterior a la elección, destinado a la organización del Proceso Electoral:</h3>");
document.write("<ul><li>Proceso Electoral: " + presupuestoPrevio[0].name + " = $" + new Intl.NumberFormat().format(presupuestoPrevio[0].value) + "</li>");
document.write("<li>Proceso Electoral: " + presupuestoPrevio[1].name + " = $" + new Intl.NumberFormat().format(presupuestoPrevio[1].value) + "</li>");
document.write("<li>Proceso Electoral: " + presupuestoPrevio[2].name + " = $" + new Intl.NumberFormat().format(presupuestoPrevio[2].value) + "</li>");
document.write("<li>Proceso Electoral: " + presupuestoPrevio[3].name + " = $" + new Intl.NumberFormat().format(presupuestoPrevio[3].value) + "</li></ul>");


//ARRAY Presupuesto Año Electoral
const presupuestoActual = [
    { name: '2015', value: 4196776135 },
    { name: '2018', value: 7144961645 },
    { name: '2021', value: 7861864517 },
];

presupuestoActual.push({ name: '2012', value: 4163804701 }); //agregando un elemento al array  
presupuestoActual.sort((a, b) => { //ordenando el array
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});

console.log('Presupuesto del año correspondiente al Proceso Electoral analizado:', presupuestoActual);
document.write("<h3>Presupuesto del año de la elección, destinado al Proceso Electoral:</h3>");
document.write("<ul><li>Proceso Electoral: " + presupuestoActual[0].name + " = $" + new Intl.NumberFormat().format(presupuestoActual[0].value) + "</li>");
document.write("<li>Proceso Electoral: " + presupuestoActual[1].name + " = $" + new Intl.NumberFormat().format(presupuestoActual[1].value) + "</li>");
document.write("<li>Proceso Electoral: " + presupuestoActual[2].name + " = $" + new Intl.NumberFormat().format(presupuestoActual[2].value) + "</li>");
document.write("<li>Proceso Electoral: " + presupuestoActual[3].name + " = $" + new Intl.NumberFormat().format(presupuestoActual[3].value) + "</li></ul>");



const presupuestoPartidos = [
    { name: '2015', value: 5355522828 },
    { name: '2018', value: 4138727092 },
    { name: '2021', value: 7226003636 },
];

presupuestoPartidos.push({ name: '2012', value: 5292486300 }); //agregando un elemento al array  
presupuestoPartidos.sort((a, b) => { //ordenando el array
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});

console.log('Presupuesto de los Partidos Políticos en el año del Proceso Electoral analizado:', presupuestoPartidos);
document.write("<h3>Presupuesto destinado a los Partidos Políticos para el año de la elección:</h3>");
document.write("<ul><li>Proceso Electoral: " + presupuestoPartidos[0].name + " = $" + new Intl.NumberFormat().format(presupuestoPartidos[0].value) + "</li>");
document.write("<li>Proceso Electoral: " + presupuestoPartidos[1].name + " = $" + new Intl.NumberFormat().format(presupuestoPartidos[1].value) + "</li>");
document.write("<li>Proceso Electoral: " + presupuestoPartidos[2].name + " = $" + new Intl.NumberFormat().format(presupuestoPartidos[2].value) + "</li>");
document.write("<li>Proceso Electoral: " + presupuestoPartidos[3].name + " = $" + new Intl.NumberFormat().format(presupuestoPartidos[3].value) + "</li></ul>");




//ARRAY Votos
const votos = [
    { name: '2015', value: 39864082 },
    { name: '2018', value: 56611027 },
    { name: '2021', value: 49151320 },
];

votos.push({ name: '2012', value: 50143616 }); //agregando un elemento al array  
votos.sort((a, b) => { //ordenando el array
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});

console.log('Votos emitidos en el Proceso Electoral:', votos);
document.write("<h3>Número de votos emitidos en la jornada electoral:</h3>");
document.write("<ul><li>Proceso Electoral: " + votos[0].name + " = $" + new Intl.NumberFormat().format(votos[0].value) + "</li>");
document.write("<li>Proceso Electoral: " + votos[1].name + " = " + new Intl.NumberFormat().format(votos[1].value) + "</li>");
document.write("<li>Proceso Electoral: " + votos[2].name + " = " + new Intl.NumberFormat().format(votos[2].value) + "</li>");
document.write("<li>Proceso Electoral: " + votos[3].name + " = " + new Intl.NumberFormat().format(votos[3].value) + "</li></ul>");


//ARRAY Lista Nominal
const listaNominal = [
    { name: '2015', value: 83536377 },
    { name: '2018', value: 89250881 },
    { name: '2021', value: 93328771 },
];

listaNominal.push({ name: '2012', value: 79454802 }); //agregando un elemento al array  
listaNominal.sort((a, b) => { //ordenando el array
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});

console.log('Registros en la Lista Nominal:', listaNominal);
document.write("<h3>Registros en la Lista Nominal para el año electoral (universo de posibles votantes):</h3>");
document.write("<ul><li>Proceso Electoral: " + listaNominal[0].name + " = " + new Intl.NumberFormat().format(listaNominal[0].value) + "</li>");
document.write("<li>Proceso Electoral: " + listaNominal[1].name + " = " + new Intl.NumberFormat().format(listaNominal[1].value) + "</li>");
document.write("<li>Proceso Electoral: " + listaNominal[2].name + " = " + new Intl.NumberFormat().format(listaNominal[2].value) + "</li>");
document.write("<li>Proceso Electoral: " + listaNominal[3].name + " = " + new Intl.NumberFormat().format(listaNominal[3].value) + "</li></ul>");


//OBJETO procesoElectoral2012

const procesoElectoral2012 = new ProcesoElectoral(
    presupuestoPrevio[0], presupuestoActual[0], presupuestoPartidos[0], votos[0], listaNominal[0]
)

//OBJETO procesoElectoral2015

const procesoElectoral2015 = new ProcesoElectoral(
    presupuestoPrevio[1], presupuestoActual[1], presupuestoPartidos[1], votos[1], listaNominal[1]
)

//OBJETO procesoElectoral2018

const procesoElectoral2018 = new ProcesoElectoral(
    presupuestoPrevio[2], presupuestoActual[2], presupuestoPartidos[2], votos[2], listaNominal[2]
)

//OBJETO procesoElectoral2021

const procesoElectoral2021 = new ProcesoElectoral(
    presupuestoPrevio[3], presupuestoActual[3], presupuestoPartidos[3], votos[3], listaNominal[3]
)


//SIMULADOR

let fecha = prompt(`Ingresa el año de la elección federal en México:\n\n Opciones válidas: ${procesosElectorales.join("-")}`);

while (fecha != "ESC") {

    if (fecha == procesosElectorales[0]) {
        alert(`Con una participación ciudadana de ${procesoElectoral2012.participacion()}% en la elección federal de ${fecha}, el costo de cada voto fue de ${procesoElectoral2012.costoVoto()} pesos. `);
        fecha = prompt(`Ingresa el año de la elección federal en México:\n\n Opciones válidas: ${procesosElectorales.join("-")}`);
    }
    else if (fecha == procesosElectorales[1]) {
        alert(`Con una participación ciudadana de ${procesoElectoral2015.participacion()}% en la elección federal de ${fecha}, el costo de cada voto fue de ${procesoElectoral2015.costoVoto()} pesos. `);
        fecha = prompt(`Ingresa el año de la elección federal en México:\n\n Opciones válidas: ${procesosElectorales.join("-")}`);
    }
    else if (fecha == procesosElectorales[2]) {
        alert(`Con una participación ciudadana de ${procesoElectoral2018.participacion()}% en la elección federal de ${fecha}, el costo de cada voto fue de ${procesoElectoral2018.costoVoto()} pesos. `);
        fecha = prompt(`Ingresa el año de la elección federal en México:\n\n Opciones válidas: ${procesosElectorales.join("-")}`);
    }
    else if (fecha == procesosElectorales[3]) {
        alert(`Con una participación ciudadana de ${procesoElectoral2021.participacion()}% en la elección federal de ${fecha}, el costo de cada voto fue de ${procesoElectoral2021.costoVoto()} pesos. `);
        fecha = prompt(`Ingresa el año de la elección federal en México:\n\n Opciones válidas: ${procesosElectorales.join("-")}`);
    }
    else {
        alert(`No ingresaste una opción válida.`);
        fecha = prompt(`Ingresa el año de la elección federal en México:\n\n Opciones válidas: ${procesosElectorales.join("-")}`);
    }
}