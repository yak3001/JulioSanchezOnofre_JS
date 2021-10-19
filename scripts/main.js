//CONSTRUCCION CLASE

class ProcesoElectoral {
    constructor(presupuestoPrevio, presupuestoActual, presupuestoPartidos, votos, listaNominal) {
        this.presupuestoPrevio = presupuestoPrevio;
        this.presupuestoActual = presupuestoActual;
        this.presupuestoPartidos = presupuestoPartidos;
        this.votos = votos;
        this.listaNominal = listaNominal;
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
//ACCESO ARRAY
for (let index=0; index<procesosElectorales.length; index++){
    console.log(procesosElectorales[index]);
}

console.log (typeof procesosElectorales[0]);
console.log(`Número de Procesos Electorales analizados: ${procesosElectorales.length}`);
console.log(`Procesos Electorales analizados: ${procesosElectorales.toString()}`);

//ARRAY Presupuesto Previo
const presupuestoPrevio = [539799052,699534390, 479250873]
console.log (typeof presupuestoPrevio[0]);
console.log(`Presupuesto del año anterior al Proceso Electoral analizado:\n2015: ${presupuestoPrevio[0]}\n2018: ${presupuestoPrevio[1]}\n2021: ${presupuestoPrevio[2]}`);

//ARRAY Presupuesto Año Electoral
const presupuestoActual = [4196776135,7144961645, 7861864517]
console.log(`Presupuesto del año correspondiente al Proceso Electoral analizado:\n2015: ${presupuestoActual[0]}\n2018: ${presupuestoActual[1]}\n2021: ${presupuestoActual[2]}`);

//ARRAY Presupuesto a Partidos políticos
const presupuestoPartidos = [5355522828,4138727092, 7226003636]
console.log(`Presupuesto asignado a los partidos políticos:\n2015: ${presupuestoPartidos[0]}\n2018: ${presupuestoPartidos[1]}\n2021: ${presupuestoPartidos[2]}`);

//ARRAY Votos
const votos = [39864082,56611027, 49151320]
console.log(`Votos emitidos en el Proceso Electoral:\n2015: ${votos[0]}\n2018: ${votos[1]}\n2021: ${votos[2]}`);

//ARRAY Lista Nominal
const listaNominal = [83536377,89250881, 93328771]
console.log(`Lista Nominal de electores para el Proceso Electoral:\n2015: ${listaNominal[0]}\n2018: ${listaNominal[1]}\n2021: ${listaNominal[2]}`);


//OBJETO procesoElectoral2015

const procesoElectoral2015 = new ProcesoElectoral(
    presupuestoPrevio [0], presupuestoActual[0], presupuestoPartidos[0], votos[0], listaNominal [0] 
)

//OBJETO procesoElectoral2018

const procesoElectoral2018 = new ProcesoElectoral(
    presupuestoPrevio [1], presupuestoActual[1], presupuestoPartidos[1], votos[1], listaNominal [1]
)


//OBJETO procesoElectoral2021

const procesoElectoral2021 = new ProcesoElectoral(
    presupuestoPrevio [2], presupuestoActual[2], presupuestoPartidos[2], votos[2], listaNominal [2]
)

//SIMULADOR

let fecha = prompt(`Ingresa el año de la elección federal en México:\n\n Opciones válidas: ${procesosElectorales.join("-")}`);

while (fecha != "ESC") {

    if (fecha == procesosElectorales[0]) {
        alert(`Con una participación ciudadana de ${procesoElectoral2015.participacion()}% en la elección federal de ${fecha}, el costo de cada voto fue de ${procesoElectoral2015.costoVoto()} pesos. `);
        fecha = prompt(`Ingresa el año de la elección federal en México:\n\n Opciones válidas: ${procesosElectorales.join("-")}`);
    }
    else if (fecha == procesosElectorales[1]) {
        alert(`Con una participación ciudadana de ${procesoElectoral2018.participacion()}% en la elección federal de ${fecha}, el costo de cada voto fue de ${procesoElectoral2018.costoVoto()} pesos. `);
        fecha = prompt(`Ingresa el año de la elección federal en México:\n\n Opciones válidas: ${procesosElectorales.join("-")}`);
    }
    else if (fecha == procesosElectorales[2]) {
        alert(`Con una participación ciudadana de ${procesoElectoral2021.participacion()}% en la elección federal de ${fecha}, el costo de cada voto fue de ${procesoElectoral2021.costoVoto()} pesos. `);
        fecha = prompt(`Ingresa el año de la elección federal en México:\n\n Opciones válidas: ${procesosElectorales.join("-")}`);
    }
    else {
        alert(`No ingresaste una opción válida.`);
        fecha = prompt(`Ingresa el año de la elección federal en México:\n\n Opciones válidas: ${procesosElectorales.join("-")}`);
    }
}