//BOTON MAGNITUD CON GET AJAX
const URL_JSON = './db/procesos.json';

$.getJSON(URL_JSON, (response, status) => {

    if (status !== 'success') {
        throw new Error('error')
    }

$('#boton-logistica').click((event) => {
    event.preventDefault();
    if ($('#input-fecha').val() == procesosElectorales[0]) {

        $('#calculo').append(`
            <div id="valor-calculo">
            <h3><b>Magnitud del Proceso Electoral ${response[0].proceso}</b></h3>
            <ul>
                <li><b>Cargos electos: </b>${response[0].cargos}</li>
                <li><b>Casillas instaladas: </b>${response[0].casillas}</li>
                <li><b>Funcionarias/os de casilla requeridos: </b>${response[0].funcionarios}</li>
                <li><b>Boletas producidas: </b>${response[0].boletas}</li>
                <li><b>Capacitadoras/es contratados: </b>${response[0].capacitadores}</li>
                <li><b>Supervisoras/es contratados: </b>${response[0].supervisores}</li>
                <li><b>Spots de radio y TV: </b>${response[0].spots}</li>
            </ul>
            <img src="./media/voto-back.png" alt="voto" id="img-calculo"></p><br><button class="btn btn-secondary" data-bs-dismiss="offcanvas" type="button">Cerrar</button></div>
            </div>
            `);
    }
    else if ($('#input-fecha').val() == procesosElectorales[1]) {

        $('#calculo').append(`
            <div id="valor-calculo">
            <h3><b>Magnitud del Proceso Electoral ${response[1].proceso}</b></h3>
            <ul>
                <li><b>Cargos electos: </b>${response[1].cargos}</li>
                <li><b>Casillas instaladas: </b>${response[1].casillas}</li>
                <li><b>Funcionarias/os de casilla requeridos: </b>${response[1].funcionarios}</li>
                <li><b>Boletas producidas: </b>${response[1].boletas}</li>
                <li><b>Capacitadoras/es contratados: </b>${response[1].capacitadores}</li>
                <li><b>Supervisoras/es contratados: </b>${response[1].supervisores}</li>
                <li><b>Spots de radio y TV: </b>${response[1].spots}</li>
            </ul>
            
            <img src="./media/voto-back.png" alt="voto" id="img-calculo"></p><br><button class="btn btn-secondary" data-bs-dismiss="offcanvas" type="button">Cerrar</button></div>
            </div>
            `);
    }
    else if ($('#input-fecha').val() == procesosElectorales[2]) {

        $('#calculo').append(`
            <div id="valor-calculo">
            <h3><b>Magnitud del Proceso Electoral ${response[2].proceso}</b></h3>
            <ul>
                <li><b>Cargos electos: </b>${response[2].cargos}</li>
                <li><b>Casillas instaladas: </b>${response[2].casillas}</li>
                <li><b>Funcionarias/os de casilla requeridos: </b>${response[2].funcionarios}</li>
                <li><b>Boletas producidas: </b>${response[2].boletas}</li>
                <li><b>Capacitadoras/es contratados: </b>${response[2].capacitadores}</li>
                <li><b>Supervisoras/es contratados: </b>${response[2].supervisores}</li>
                <li><b>Spots de radio y TV: </b>${response[2].spots}</li>
            </ul>
            
            <img src="./media/voto-back.png" alt="voto" id="img-calculo"></p><br><button class="btn btn-secondary" data-bs-dismiss="offcanvas" type="button">Cerrar</button></div>
            </div>
            `);
    }
    else if ($('#input-fecha').val() == procesosElectorales[3]) {

        $('#calculo').append(`
            <div id="valor-calculo">
            <h3><b>Magnitud del Proceso Electoral ${response[3].proceso}</b></h3>
            <ul>
                <li><b>Cargos electos: </b>${response[3].cargos}</li>
                <li><b>Casillas instaladas: </b>${response[3].casillas}</li>
                <li><b>Funcionarias/os de casilla requeridos: </b>${response[3].funcionarios}</li>
                <li><b>Boletas producidas: </b>${response[3].boletas}</li>
                <li><b>Capacitadoras/es contratados: </b>${response[3].capacitadores}</li>
                <li><b>Supervisoras/es contratados: </b>${response[3].supervisores}</li>
                <li><b>Spots de radio y TV: </b>${response[3].spots}</li>
            </ul>
            
            <img src="./media/voto-back.png" alt="voto" id="img-calculo"></p><br><button class="btn btn-secondary" data-bs-dismiss="offcanvas" type="button">Cerrar</button></div>
            </div>
            `);
    }
    else {
        $('#calculo').append(`<div id="valor-calculo">No seleccionaste una opción válida.<br>Las opciones disponibles son: <b>${procesosElectorales.join("-")}</b><br><img src="./media/voto-back.png" alt="voto" id="img-calculo"><br><button class="btn btn-secondary" data-bs-dismiss="offcanvas" type="button" >Cerrar</button></div>`);
    }
}
)
}
)


