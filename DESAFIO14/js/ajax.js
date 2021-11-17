// BOTON CON GET AJAX
const URL_JSON = './db/procesos.json';

$('#boton-logistica').click((event) => {
    event.preventDefault();
    $.getJSON(URL_JSON, (response, status) => {

        if (status !== 'success') {
            throw new Error('error')
        }

        for (const procesos of response) {
            $('body').append(`
           <section class="logistica">
           <div id="logistica">
            <div>
            <h3><b>Proceso Electoral ${procesos.proceso}</b></h3>
            <ul>
                <li><b>Cargos electos: </b>${procesos.cargos}</li>
                <li><b>Casillas instaladas: </b>${procesos.casillas}</li>
                <li><b>Funcionarias/os de casilla requeridos: </b>${procesos.funcionarios}</li>
                <li><b>Boletas producidas: </b>${procesos.boletas}</li>
                <li><b>Capacitadoras/es contratados: </b>${procesos.capacitadores}</li>
                <li><b>Supervisoras/es contratados: </b>${procesos.supervisores}</li>
                <li><b>Spots de radio y TV: </b>${procesos.spots}</li>
            </ul>
          
            </div>
            </section>
            `);


        }
        $('body').prepend(`
        <div class="logistica" id="logistica">
        <h1>Datos de la organización electoral</h1>
        </div>
        `);

        $('body').append(`
        <div class="logistica" id="logistica">
        <button class="btn btn-secondary" id="boton-regresar">Regresar</button>
        </div>
        `);

        $('#boton-regresar').on('click', () => {
            $('.logistica').fadeOut('slow', () => {
                $('.calc').fadeIn('slow')
            })
            $('.logistica').remove();
        }
        )
    }
    )
    $('.calc').fadeOut('slow', () => {
        $('.logistica').fadeIn('slow')
    })
}
)