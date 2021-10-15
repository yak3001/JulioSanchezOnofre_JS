//FUNCION PARA CONSTRUIR OBJETO

function ProcesoElectoral(presupuestoPrevio, presupuestoActual, presupuestoPartidos, votos, listaNominal) {
    this.presupuestoPrevio = presupuestoPrevio;
    this.presupuestoActual = presupuestoActual;
    this.presupuestoPartidos = presupuestoPartidos;
    this.votos;
    this.listaNominal;
    this.participacion = function (participacion) {
        participacion = ((votos / listaNominal) * 100);
        return participacion.toFixed(2);
    }

    this.costoVoto = function (costoVoto) {
        costoVoto = (presupuestoPrevio + presupuestoActual + presupuestoPartidos) / votos;
        return costoVoto.toFixed(2);
    }
}

//CONSTRUCTOR DE OBJETO procesoElectoral2015

const procesoElectoral2015 = new ProcesoElectoral(
    539799052, 4196776135, 5355522828, 39864082, 83536377
)

procesoElectoral2015.participacion();
procesoElectoral2015.costoVoto();

//CONSTRUCTOR DE OBJETO procesoElectoral2018

const procesoElectoral2018 = new ProcesoElectoral(
    699534390, 7144961645, 4138727092, 56611027, 89250881
)

procesoElectoral2018.participacion();
procesoElectoral2018.costoVoto();

//CONSTRUCTOR DE OBJETO procesoElectoral2021

const procesoElectoral2021 = new ProcesoElectoral(
    479250873, 7861864517, 7226003636, 49151320, 93328771
)

procesoElectoral2021.participacion();
procesoElectoral2021.costoVoto();


//SIMULADOR

let fecha = prompt("Ingresa el año de la elección federal en México:\n\n Opciones válidas: 2015 - 2018 - 2021");

while (fecha != "ESC") {

    if (fecha == 2015) {
        alert(`Con una participación ciudadana de ${procesoElectoral2015.participacion()}% en la elección federal de ${fecha}, el costo de cada voto fue de ${procesoElectoral2015.costoVoto()} pesos. `);
        fecha = prompt("Ingresa el año de la elección federal en México:\n\n Opciones válidas: 2015 - 2018 - 2021");
    }
    else if (fecha == 2018) {
        alert(`Con una participación ciudadana de ${procesoElectoral2018.participacion()}% en la elección federal de ${fecha}, el costo de cada voto fue de ${procesoElectoral2018.costoVoto()} pesos. `);
        fecha = prompt("Ingresa el año de la elección federal en México:\n\n Opciones válidas: 2015 - 2018 - 2021");
    }
    else if (fecha == 2021) {
        alert(`Con una participación ciudadana de ${procesoElectoral2021.participacion()}% en la elección federal de ${fecha}, el costo de cada voto fue de ${procesoElectoral2021.costoVoto()} pesos. `);
        fecha = prompt("Ingresa el año de la elección federal en México:\n\n Opciones válidas: 2015 - 2018 - 2021");
    }
    else {
        alert(`No ingresaste una opción válida.`);
        fecha = prompt("Ingresa el año de la elección federal en México:\n\n Opciones válidas: 2015 - 2018 - 2021");
    }
}

