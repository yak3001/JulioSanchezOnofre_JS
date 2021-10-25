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

    votosPorcentaje() {
        return (this.participacion() * this.listaNominal) / 100
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


//CALCULADORA DEL VOTO EN LAS ELECCIONES

const calculadoraCosto = document.getElementById('calculadora-costo');
const inputFecha = document.getElementById('input-fecha');
const inputFechaParticipacion = document.getElementById('input-fecha-participacion');
const botonCalcular = document.getElementById('calcular');
const botonVariables = document.getElementById('boton-variables');
const botonBorrar = document.getElementById('borrar');
let mensaje = document.getElementById("calculo");
let variables = document.getElementById("calculo");
let participacion = document.getElementById("participacion");

botonCalcular.onclick = (event) => {
    event.preventDefault();
    let fecha = inputFecha.value;
    if (fecha == procesosElectorales[0]) {
        mensaje.innerHTML = `<h3>Proceso Electoral ${procesosElectorales[0] - 1}-${procesosElectorales[0]}</h3><p>Con una participación ciudadana de <b>${procesoElectoral2012.participacion()}%</b> en la elección federal de <b>${fecha}</b>, el costo de cada voto fue de <b>${procesoElectoral2012.costoVoto()} pesos</b>.</p>`;

        ;
        //document.body.div.appendChild(mensaje);

    }

    else if (fecha == procesosElectorales[1]) {
        mensaje.innerHTML = `<h3>Proceso Electoral ${procesosElectorales[1] - 1}-${procesosElectorales[1]}</h3><p>Con una participación ciudadana de <b>${procesoElectoral2015.participacion()}%</b> en la elección federal de <b>${fecha}</b>, el costo de cada voto fue de <b>${procesoElectoral2015.costoVoto()} pesos</b>.</p> `;
        // document.body.div.appendChild(mensaje);
    }
    else if (fecha == procesosElectorales[2]) {
        mensaje.innerHTML = `<h3>Proceso Electoral ${procesosElectorales[2] - 1}-${procesosElectorales[2]}</h3><p>Con una participación ciudadana de <b>${procesoElectoral2018.participacion()}%</b> en la elección federal de <b>${fecha}</b>, el costo de cada voto fue de <b>${procesoElectoral2018.costoVoto()} pesos.</b></p>`;
        //  document.body.div.appendChild(mensaje);
    }
    else if (fecha == procesosElectorales[3]) {
        mensaje.innerHTML = `<h3>Proceso Electoral ${procesosElectorales[3] - 1}-${procesosElectorales[3]}</h3><p>Con una participación ciudadana de <b>${procesoElectoral2021.participacion()}%</b> en la elección federal de <b>${fecha}</b>, el costo de cada voto fue de <b>${procesoElectoral2021.costoVoto()} pesos.</b></p>`;
        //  document.body.div.appendChild(mensaje);
    }
    else {
        alert(`No ingresaste una opción válida.\n\nOpciones disponibles: ${procesosElectorales.join("-")}`);
    }

}

botonVariables.onclick = (event) => {
    event.preventDefault();

    let fecha = inputFecha.value;
    if (fecha == procesosElectorales[0]) {
        variables.innerHTML = `<h3>Variables ${procesosElectorales[0] - 1}-${procesosElectorales[0]}</h3><ul><li>Presupuesto del ${procesosElectorales[0] - 1} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoPrevio[0].value)}</b></li>
        <li>Presupuesto del ${procesosElectorales[0]} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoActual[0].value)}</b></li>
        <li>Presupuesto ${procesosElectorales[0]} para Partidos Políticos = <b>$${new Intl.NumberFormat().format(presupuestoPartidos[0].value)}</b></li>
        <li>Votos emitidos en ${procesosElectorales[0]} = <b>${new Intl.NumberFormat().format(votos[0].value)}</b></li>
        <li>Lista Nominal de electores en ${procesosElectorales[0]} = <b>${new Intl.NumberFormat().format(listaNominal[0].value)}</b></li></ul>`;
        // document.body.div.appendChild(variables);
    }
    else if (fecha == procesosElectorales[1]) {
        variables.innerHTML = `<h3>Variables ${procesosElectorales[1] - 1}-${procesosElectorales[1]}</h3><ul><li>Presupuesto del ${procesosElectorales[1] - 1} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoPrevio[1].value)}</b></li>
        <li>Presupuesto del ${procesosElectorales[1]} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoActual[1].value)}</b></li>
        <li>Presupuesto ${procesosElectorales[1]} para Partidos Políticos = <b>$${new Intl.NumberFormat().format(presupuestoPartidos[1].value)}</b></li>
        <li>Votos emitidos en ${procesosElectorales[1]} = <b>${new Intl.NumberFormat().format(votos[1].value)}</b></li>
        <li>Lista Nominal de electores en ${procesosElectorales[1]} = <b>${new Intl.NumberFormat().format(listaNominal[1].value)}</b></li></ul>`;
        // document.body.div.appendChild(variables);
    }
    else if (fecha == procesosElectorales[2]) {
        variables.innerHTML = `<h3>Variables ${procesosElectorales[2] - 1}-${procesosElectorales[2]}</h3><ul><li>Presupuesto del ${procesosElectorales[2] - 1} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoPrevio[2].value)}</b></li>
        <li>Presupuesto del ${procesosElectorales[2]} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoActual[2].value)}</b></li>
        <li>Presupuesto ${procesosElectorales[2]} para Partidos Políticos = <b>$${new Intl.NumberFormat().format(presupuestoPartidos[2].value)}</b></li>
        <li>Votos emitidos en ${procesosElectorales[2]} = <b>${new Intl.NumberFormat().format(votos[2].value)}</b></li>
        <li>Lista Nominal de electores en ${procesosElectorales[2]} = <b>${new Intl.NumberFormat().format(listaNominal[2].value)}</b></li></ul>`;
        //  document.body.div.appendChild(variables);
    }
    else if (fecha == procesosElectorales[3]) {
        variables.innerHTML = `<h3>Variables ${procesosElectorales[3] - 1}-${procesosElectorales[3]}</h3><ul><li>Presupuesto del ${procesosElectorales[3] - 1} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoPrevio[3].value)}</b></li>
        <li>Presupuesto del ${procesosElectorales[3]} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoActual[3].value)}</b></li>
        <li>Presupuesto ${procesosElectorales[3]} para Partidos Políticos = <b>$${new Intl.NumberFormat().format(presupuestoPartidos[3].value)}</b></li>
        <li>Votos emitidos en ${procesosElectorales[3]} = <b>${new Intl.NumberFormat().format(votos[3].value)}</b></li>
        <li>Lista Nominal de electores en ${procesosElectorales[3]} = <b>${new Intl.NumberFormat().format(listaNominal[3].value)}</b></li></ul>`;
        //  document.body.div.appendChild(variables);
    }
    else {
        alert((`No ingresaste una opción válida.\n\nOpciones disponibles: ${procesosElectorales.join("-")}`));
    }
}
botonBorrar.onclick = (event) => {
    event.preventDefault();
    let borrar = mensaje.innerHTML = "";
    let borrar2 = variables.innerHTML = "";
    return borrar + borrar2;
}

//CALCULADORA DEL VOTO RESPECTO A LA PARTICIPACIÓN

function menos() {
    document.getElementById("barra").stepDown(10);
    let fechaParticipacion = (inputFechaParticipacion.value);
    let participacionPorcentaje = document.getElementById("barra");
    let currentVal = participacionPorcentaje.value;

    if (fechaParticipacion == procesosElectorales[0]) {
        //participacionPorcentaje.defaultValue = 50;
        calculo.value = (procesoElectoral2012.presupuestoElecciones() / ((currentVal * listaNominal[0].value) / 100)).toFixed(2);
        document.getElementById("participacion").innerHTML =
            `Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${fechaParticipacion}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b>`;
    }
    else if (fechaParticipacion == procesosElectorales[1]) {
        calculo.value = (procesoElectoral2015.presupuestoElecciones() / ((currentVal * listaNominal[1].value) / 100)).toFixed(2);
        document.getElementById("participacion").innerHTML =
            `Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${fechaParticipacion}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b>`;
    }
    else if (fechaParticipacion == procesosElectorales[2]) {
        calculo.value = (procesoElectoral2018.presupuestoElecciones() / ((currentVal * listaNominal[2].value) / 100)).toFixed(2);
        document.getElementById("participacion").innerHTML =
            `Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${fechaParticipacion}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b>`;
    }
    else if (fechaParticipacion == procesosElectorales[3]) {
        calculo.value = (procesoElectoral2021.presupuestoElecciones() / ((currentVal * listaNominal[3].value) / 100)).toFixed(2);
        document.getElementById("participacion").innerHTML =
            `Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${fechaParticipacion}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b>`;
    }
    else {
        alert(`No ingresaste una opción válida.\n\nOpciones disponibles: ${procesosElectorales.join("-")}`);

    }
    console.log(currentVal);
    console.log(listaNominal[0].value);

}
function mas() {
    document.getElementById("barra").stepUp(10);
    let fechaParticipacion = (inputFechaParticipacion.value);
    let participacionPorcentaje = document.getElementById("barra");
    let currentVal = participacionPorcentaje.value;

    if (fechaParticipacion == procesosElectorales[0]) {
        calculo.value = (procesoElectoral2012.presupuestoElecciones() / ((currentVal * listaNominal[0].value) / 100)).toFixed(2);
        document.getElementById("participacion").innerHTML =
            `Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${fechaParticipacion}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b>`;
    }
    else if (fechaParticipacion == procesosElectorales[1]) {
        calculo.value = (procesoElectoral2015.presupuestoElecciones() / ((currentVal * listaNominal[1].value) / 100)).toFixed(2);
        document.getElementById("participacion").innerHTML =
            `Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${fechaParticipacion}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b>`;
    }
    else if (fechaParticipacion == procesosElectorales[2]) {
        calculo.value = (procesoElectoral2018.presupuestoElecciones() / ((currentVal * listaNominal[2].value) / 100)).toFixed(2);
        document.getElementById("participacion").innerHTML =
            `Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${fechaParticipacion}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b>`;
    }
    else if (fechaParticipacion == procesosElectorales[3]) {
        calculo.value = (procesoElectoral2021.presupuestoElecciones() / ((currentVal * listaNominal[3].value) / 100)).toFixed(2);
        document.getElementById("participacion").innerHTML =
            `Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${fechaParticipacion}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b>`;
    }
    else {
        alert(`No ingresaste una opción válida.\n\nOpciones disponibles: ${procesosElectorales.join("-")}`);
    }
    console.log(currentVal);
    console.log(listaNominal[0].value);
}

