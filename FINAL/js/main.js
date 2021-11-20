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
}


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

//eventos JQUERY BOTON 12
$('#card').on('mousemove', () => {
    $('#cardBody').addClass('card-body-over');
})

$('#card').on('mouseout', () => {
    $('#cardBody').removeClass('card-body-over');
})


$('#btn-card-12').on('mousedown', () => {
    $('#cardBody').addClass('card-body-clic');
})
$('#btn-card-12').on('mouseup', () => {
    $('#cardBody').removeClass('card-body-clic');
})

$('#btn-card-12').on('click', () => {
    seleccion2012();
})

//eventos JQUERY BOTON 15

$('#card15').on('mousemove', () => {
    $('#cardBody15').addClass('card-body-over');
})

$('#card15').on('mouseout', () => {
    $('#cardBody15').removeClass('card-body-over');
})

$('#btn-card-15').on('mousedown', () => {
    $('#cardBody15').addClass('card-body-clic');
})
$('#btn-card-15').on('mouseup', () => {
    $('#cardBody15').removeClass('card-body-clic');
})

$('#btn-card-15').on('click', () => {
    seleccion2015();
})

//eventos JQUERY BOTON 18

$('#card18').on('mousemove', () => {
    $('#cardBody18').addClass('card-body-over');
})

$('#card18').on('mouseout', () => {
    $('#cardBody18').removeClass('card-body-over');
})


$('#btn-card-18').on('mousedown', () => {
    $('#cardBody18').addClass('card-body-clic');
})
$('#btn-card-18').on('mouseup', () => {
    $('#cardBody18').removeClass('card-body-clic');
})

$('#btn-card-18').on('click', () => {
    seleccion2018();
})

//eventos JQUERY BOTON 21

$('#card21').on('mousemove', () => {
    $('#cardBody21').addClass('card-body-over');
})

$('#card21').on('mouseout', () => {
    $('#cardBody21').removeClass('card-body-over');
})


$('#btn-card-21').on('mousedown', () => {
    $('#cardBody21').addClass('card-body-clic');
})
$('#btn-card-21').on('mouseup', () => {
    $('#cardBody21').removeClass('card-body-clic');
})

$('#btn-card-21').on('click', () => {
    seleccion2021();
})

//CALCULADORA DEL VOTO EN LAS ELECCIONES- Uso de JQUERY

//funciones para cálculos con JQUERY

function seleccion2012() {
    let seleccionFecha = $('#btn-card-12').val();
    $('#valor-fecha').replaceWith(`<p id="valor-fecha"><input type="number" value="${seleccionFecha}" id="input-fecha"></input></p>`);
}

function seleccion2015() {
    let seleccionFecha = $('#btn-card-15').val();
    $('#valor-fecha').replaceWith(`<p id="valor-fecha"><input type="number" value="${seleccionFecha}" id="input-fecha"></input></p>`);
}

function seleccion2018() {
    let seleccionFecha = $('#btn-card-18').val();
    $('#valor-fecha').replaceWith(`<p id="valor-fecha"><input type="number" value="${seleccionFecha}" id="input-fecha"></input></p>`);
}

function seleccion2021() {
    let seleccionFecha = $('#btn-card-21').val();
    $('#valor-fecha').replaceWith(`<p id="valor-fecha"><input type="number" value="${seleccionFecha}" id="input-fecha"></input></p>`);
}

function limpiarCalculo() {
    $('#valor-calculo').remove();
}

//Evento boton calcular con JQUERY

$('#boton-calcular').on('click', (event) => {
    event.preventDefault();

    if ($('#input-fecha').val() == procesosElectorales[0]) {
        $('#calculo').append(`<div id="valor-calculo"><h3>Proceso Electoral ${procesosElectorales[0] - 1}-${procesosElectorales[0]}</h3><p>Con una participación ciudadana de <b>${procesoElectoral2015.participacion()}%</b> en la elección federal de <b>${procesosElectorales[0]}</b>, el costo de cada voto fue de <b>${procesoElectoral2012.costoVoto()} pesos</b><img src="./media/voto-back.png" alt="voto" id="img-calculo"></p><br><button class="btn btn-secondary" data-bs-dismiss="offcanvas" type="button">Cerrar</button></div>`);
    }

    else if ($('#input-fecha').val() == procesosElectorales[1]) {
        $('#calculo').append(`<div id="valor-calculo"><h3>Proceso Electoral ${procesosElectorales[1] - 1}-${procesosElectorales[1]}</h3><p>Con una participación ciudadana de <b>${procesoElectoral2015.participacion()}%</b> en la elección federal de <b>${procesosElectorales[1]}</b>, el costo de cada voto fue de <b>${procesoElectoral2015.costoVoto()} pesos</b><img src="./media/voto-back.png" alt="voto" id="img-calculo"></p><br><button class="btn btn-secondary" data-bs-dismiss="offcanvas" type="button">Cerrar</button></div>`);

    }
    else if ($('#input-fecha').val() == procesosElectorales[2]) {
        $('#calculo').append(`<div id="valor-calculo"><h3>Proceso Electoral ${procesosElectorales[2] - 1}-${procesosElectorales[2]}</h3><p>Con una participación ciudadana de <b>${procesoElectoral2018.participacion()}%</b> en la elección federal de <b>${procesosElectorales[2]}</b>, el costo de cada voto fue de <b>${procesoElectoral2018.costoVoto()} pesos.</b><img src="./media/voto-back.png" alt="voto" id="img-calculo"></p><br><button class="btn btn-secondary" data-bs-dismiss="offcanvas" type="button">Cerrar</button></div>`);

    }
    else if ($('#input-fecha').val() == procesosElectorales[3]) {
        $('#calculo').append(`<div id="valor-calculo"><h3>Proceso Electoral ${procesosElectorales[3] - 1}-${procesosElectorales[3]}</h3><p>Con una participación ciudadana de <b>${procesoElectoral2021.participacion()}%</b> en la elección federal de <b>${procesosElectorales[3]}</b>, el costo de cada voto fue de <b>${procesoElectoral2021.costoVoto()} pesos.</b><img src="./media/voto-back.png" alt="voto" id="img-calculo"></p><br><button class="btn btn-secondary" data-bs-dismiss="offcanvas" type="button">Cerrar</button></div>`);

    }
    else {
        $('#calculo').append(`<div id="valor-calculo">No seleccionaste una opción válida.<br>Las opciones disponibles son: <b>${procesosElectorales.join("-")}</b><br><img src="./media/voto-back.png" alt="voto" id="img-calculo"><br><button class="btn btn-secondary" data-bs-dismiss="offcanvas" type="button" >Cerrar</button></div>`);
    }

})


//Evento boton variables con JQUERY

$('#boton-variables').on('click', (event) => {
    event.preventDefault();

    if ($('#input-fecha').val() == procesosElectorales[0]) {
        $('#calculo').append(`<div class="offcanvas-title" id="valor-calculo"><h3>Variables ${procesosElectorales[0] - 1}-${procesosElectorales[0]}</h3><p><ul><li>Presupuesto del ${procesosElectorales[0] - 1} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoPrevio[0].value)}</b></li>
        <li>Presupuesto del ${procesosElectorales[0]} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoActual[0].value)}</b></li>
        <li>Presupuesto ${procesosElectorales[0]} para Partidos Políticos = <b>$${new Intl.NumberFormat().format(presupuestoPartidos[0].value)}</b></li>
        <li>Votos emitidos en ${procesosElectorales[0]} = <b>${new Intl.NumberFormat().format(votos[0].value)}</b></li>
        <li>Lista Nominal de electores en ${procesosElectorales[0]} = <b>${new Intl.NumberFormat().format(listaNominal[0].value)}</b></li></ul><img src="./media/voto-back.png" alt="voto" id="img-calculo"></p><br><button class="btn btn-secondary" data-bs-dismiss="offcanvas" type="button" >Cerrar</button></div>`);

    }
    else if ($('#input-fecha').val() == procesosElectorales[1]) {
        $('#calculo').append(`<div id="valor-calculo"><h3>Variables ${procesosElectorales[1] - 1}-${procesosElectorales[1]}</h3><ul><li>Presupuesto del ${procesosElectorales[1] - 1} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoPrevio[1].value)}</b></li>
        <li>Presupuesto del ${procesosElectorales[1]} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoActual[1].value)}</b></li>
        <li>Presupuesto ${procesosElectorales[1]} para Partidos Políticos = <b>$${new Intl.NumberFormat().format(presupuestoPartidos[1].value)}</b></li>
        <li>Votos emitidos en ${procesosElectorales[1]} = <b>${new Intl.NumberFormat().format(votos[1].value)}</b></li>
        <li>Lista Nominal de electores en ${procesosElectorales[1]} = <b>${new Intl.NumberFormat().format(listaNominal[1].value)}</b></li></ul>
        <img src="./media/voto-back.png" alt="voto" id="img-calculo"></p><br><button class="btn btn-secondary" data-bs-dismiss="offcanvas" type="button" >Cerrar</button></div>`);

    }
    else if ($('#input-fecha').val() == procesosElectorales[2]) {
        $('#calculo').append(`<div id="valor-calculo"><h3>Variables ${procesosElectorales[2] - 1}-${procesosElectorales[2]}</h3><ul><li>Presupuesto del ${procesosElectorales[2] - 1} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoPrevio[2].value)}</b></li>
        <li>Presupuesto del ${procesosElectorales[2]} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoActual[2].value)}</b></li>
        <li>Presupuesto ${procesosElectorales[2]} para Partidos Políticos = <b>$${new Intl.NumberFormat().format(presupuestoPartidos[2].value)}</b></li>
        <li>Votos emitidos en ${procesosElectorales[2]} = <b>${new Intl.NumberFormat().format(votos[2].value)}</b></li>
        <li>Lista Nominal de electores en ${procesosElectorales[2]} = <b>${new Intl.NumberFormat().format(listaNominal[2].value)}</b></li></ul>
        <img src="./media/voto-back.png" alt="voto" id="img-calculo"></p><br><button class="btn btn-secondary" data-bs-dismiss="offcanvas" type="button">Cerrar</button></div>`);

    }
    else if ($('#input-fecha').val() == procesosElectorales[3]) {
        $('#calculo').append(`<div id="valor-calculo"><h3>Variables ${procesosElectorales[3] - 1}-${procesosElectorales[3]}</h3><ul><li>Presupuesto del ${procesosElectorales[3] - 1} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoPrevio[3].value)}</b></li>
        <li>Presupuesto del ${procesosElectorales[3]} para elecciones = <b>$${new Intl.NumberFormat().format(presupuestoActual[3].value)}</b></li>
        <li>Presupuesto ${procesosElectorales[3]} para Partidos Políticos = <b>$${new Intl.NumberFormat().format(presupuestoPartidos[3].value)}</b></li>
        <li>Votos emitidos en ${procesosElectorales[3]} = <b>${new Intl.NumberFormat().format(votos[3].value)}</b></li>
        <li>Lista Nominal de electores en ${procesosElectorales[3]} = <b>${new Intl.NumberFormat().format(listaNominal[3].value)}</b></li></ul>
        <img src="./media/voto-back.png" alt="voto" id="img-calculo"></p><br><button class="btn btn-secondary" data-bs-dismiss="offcanvas" type="button">Cerrar</button></div>`);

    }
    else {
        $('#calculo').append(`<div id="valor-calculo">No seleccionaste una opción válida.<br>Las opciones disponibles son: <b>${procesosElectorales.join("-")}</b><br><img src="./media/voto-back.png" alt="voto" id="img-calculo"></p><br><button class="btn btn-secondary" data-bs-dismiss="offcanvas" type="button">Cerrar</button></div>`);
    }
})


//CALCULADORA DEL VOTO RESPECTO A LA PARTICIPACIÓN-JQUERY

function menos() {
    document.getElementById('barra').stepDown(10);
    let currentVal = $('#barra').val();

    if ($('#input-fecha').val() == procesosElectorales[0]) {
        calculo.value = (procesoElectoral2012.presupuestoElecciones() / ((currentVal * listaNominal[0].value) / 100)).toFixed(2);
        $('#participacion').replaceWith(`<div id="participacion"><br>Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${$('#input-fecha').val()}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b></div>`);
    }
    else if ($('#input-fecha').val() == procesosElectorales[1]) {
        calculo.value = (procesoElectoral2015.presupuestoElecciones() / ((currentVal * listaNominal[1].value) / 100)).toFixed(2);
        $('#participacion').replaceWith(`<div id="participacion"><br>Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${$('#input-fecha').val()}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b></div>`);
    }
    else if ($('#input-fecha').val() == procesosElectorales[2]) {
        calculo.value = (procesoElectoral2018.presupuestoElecciones() / ((currentVal * listaNominal[2].value) / 100)).toFixed(2);
        $('#participacion').replaceWith(`<div id="participacion"><br>Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${$('#input-fecha').val()}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b></div>`);
    }
    else if ($('#input-fecha').val() == procesosElectorales[3]) {
        calculo.value = (procesoElectoral2021.presupuestoElecciones() / ((currentVal * listaNominal[3].value) / 100)).toFixed(2);
        $('#participacion').replaceWith(`<div id="participacion"><br>Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${$('#input-fecha').val()}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b></div>`);
    }
    else {
        alert(`No seleccionaste una opción válida.\n\nOpciones disponibles: ${procesosElectorales.join("-")}`);

    }
}

function mas() {
    document.getElementById('barra').stepUp(10);
    let currentVal = $('#barra').val();

    if ($('#input-fecha').val() == procesosElectorales[0]) {
        calculo.value = (procesoElectoral2012.presupuestoElecciones() / ((currentVal * listaNominal[0].value) / 100)).toFixed(2);
        $('#participacion').replaceWith(`<div id="participacion"><br>Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${$('#input-fecha').val()}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b></div>`);
    }
    else if ($('#input-fecha').val() == procesosElectorales[1]) {
        calculo.value = (procesoElectoral2015.presupuestoElecciones() / ((currentVal * listaNominal[1].value) / 100)).toFixed(2);
        $('#participacion').replaceWith(`<div id="participacion"><br>Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${$('#input-fecha').val()}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b></div>`);
    }
    else if ($('#input-fecha').val() == procesosElectorales[2]) {
        calculo.value = (procesoElectoral2018.presupuestoElecciones() / ((currentVal * listaNominal[2].value) / 100)).toFixed(2);
        $('#participacion').replaceWith(`<div id="participacion"><br>Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${$('#input-fecha').val()}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b></div>`);
    }
    else if ($('#input-fecha').val() == procesosElectorales[3]) {
        calculo.value = (procesoElectoral2021.presupuestoElecciones() / ((currentVal * listaNominal[3].value) / 100)).toFixed(2);
        $('#participacion').replaceWith(`<div id="participacion"><br>Con una participación de <b>${currentVal}%</b> en las elecciones de <b>${$('#input-fecha').val()}</b>, el costo de cada voto habría sido de <b>$${calculo.value} </b></div>`);
    }
    else {
        alert(`No seleccionaste una opción válida.\n\nOpciones disponibles: ${procesosElectorales.join("-")}`);
    }
}

//CALCULO PERSONALIZADO CON DATOS DEL FORMULARIO - JQUERY
const inputPersonalPrevio = $('#personal-previo'); //variable para obtener el campo de datos
const inputPersonalActual = $('#personal-actual'); //variable para obtener el campo de datos
const inputPersonalPartidos = $('#personal-partidos'); //variable para obtener el campo de datos
const inputPersonalVotos = $('#personal-votos'); //variable para obtener el campo de datos
const inputPersonalLista = $('#personal-lista'); //variable para obtener el campo de datos


class ProcesoElectoralPersonal {
    constructor(inputPersonalPrevio, inputPersonalActual, inputPersonalPartidos, inputPersonalVotos, inputPersonalLista) {
        this.personalPrevio = $(inputPersonalPrevio).val();
        this.personalActual = $(inputPersonalActual).val();
        this.personalPartidos = $(inputPersonalPartidos).val();
        this.personalVotos = $(inputPersonalVotos).val();
        this.personalLista = $(inputPersonalLista).val();

    }


    participacionPersonal() {
        return ((this.personalVotos / this.personalLista) * 100).toFixed(2);
    }


    presupuestoEleccionesPersonal() {
        return this.personalPrevio + this.personalActual + this.personalPartidos;
    }

    costoVotoPersonal() {

        return (this.presupuestoEleccionesPersonal() / this.personalVotos).toFixed(2);
    }
}

const calculoPersonal = new ProcesoElectoralPersonal(
    inputPersonalPrevio, inputPersonalActual, inputPersonalPartidos, inputPersonalVotos, inputPersonalLista
)


// // MÉTODO AGREGAR DATOS DE FORMULARIO

const inputProcesoElectoralPersonal = JSON.parse(sessionStorage.getItem('calculoPersonal')) || [];
const create = (calculoPersonal) => {
    inputProcesoElectoralPersonal.push(calculoPersonal)
    sessionStorage.setItem('inputProcesoElectoralPersonal', JSON.stringify(inputProcesoElectoralPersonal))
}

//FUNCION BORRAR ELEMENTO DEL STORAGE
function borrarStorage() {
    if (sessionStorage.getItem('inputProcesoElectoralPersonal') != null) {
        sessionStorage.removeItem('inputProcesoElectoralPersonal');
    }
}

// //ESCUCHANDO EVENTO DEL FORMULARIO-JQUERY

$('#submit').on('click', (event) => {
    event.preventDefault()
    const outputCalculoPersonal = new ProcesoElectoralPersonal(
        inputPersonalPrevio, inputPersonalActual, inputPersonalPartidos, inputPersonalVotos, inputPersonalLista
    )
    create(outputCalculoPersonal);

    function participacionPersonal() {
        return ((parseInt(procesoPersonal[0].personalVotos) / parseInt(procesoPersonal[0].personalLista)) * 100).toFixed(2);
    }


    function presupuestoEleccionesPersonal() {
        return (parseInt(procesoPersonal[0].personalPrevio)) + (parseInt(procesoPersonal[0].personalActual)) + (parseInt(procesoPersonal[0].personalPartidos));
    }

    function costoVotoPersonal() {

        return (presupuestoEleccionesPersonal() / (parseInt(procesoPersonal[0].personalVotos))).toFixed(2);
    }

    let procesoPersonal = JSON.parse(sessionStorage.getItem('inputProcesoElectoralPersonal'));

    $('#calculo').append(`<div id="valor-calculo"><h3>Cálculo Personalizado</h3><p>Con una participación ciudadana de <b>${participacionPersonal()}%</b> y un presupuesto total de <b>${new Intl.NumberFormat().format(presupuestoEleccionesPersonal())} pesos</b>, el costo de cada voto sería de <b>${new Intl.NumberFormat().format(costoVotoPersonal())} pesos</b></p>
    <br><img src="./media/voto-back.png" alt="voto" id="img-calculo"></p><br><button class="btn btn-secondary" id="resetear" data-bs-dismiss="offcanvas">Reiniciar</button></div>`);

})


$('#calculo').on('hidden.bs.offcanvas', () => {
    limpiarCalculo();
})

$('#resetear').on('click', () => {
    borrarStorage();
    window.location.reload();
}
)
//ANIMACIONES
$('body').prepend('<section class="precalc"><div class="inPrecalc"><p><h2><b>Cuando decides no participar el día de las elecciones, el voto nos sale más caro a todas y todos los mexicanos...</b></p><p>Ingresa a esta calculadora y conoce cuánto nos ha costado cada voto en México.</h2></p><p><buton class="btn btn-primary" id="Ingresar">Ir a la calculadora</button></p></div></section>')
$('.precalc').fadeIn();
$('.calc').hide();

$('#Ingresar').on('click', () => {
    $('.precalc').fadeOut('slow', () => {
        $('.calc').fadeIn('slow');
    })
}
)

$('#calculo-personalizado').hide();
$('#hacer-calculo').on('click', () =>
    $('#calculo-personalizado').slideToggle()
)


