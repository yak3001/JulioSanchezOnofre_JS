let firmas = prompt("Para iniciar un proceso de revocación de mandato del Presidente en México, debe solicitarlo con su firma por lo menos el 3% de la Lista Nominal.\n\nSi quieres saber si ya se cumplió este requisito, ingresa el número de firmas reunidas");
let listaNominal = 91581125;

function validez(comprobar) {
    comprobar = parseInt(listaNominal * 0.03);
    while (firmas != "ESC") {
        if (parseInt(firmas) >= comprobar) {
            alert(`Con ${parseInt(firmas)} firmas sí se cumple el requisito mínimo de firmas requeridas para convocar el proceso de revocación de mandato. El mínimo requerido son ${listaNominal} firmas.`);
            break;
        }
        else if (parseInt(firmas) < comprobar) {
            alert(`Con ${parseInt(firmas)} firmas no se cumple el requisito mínimo de firmas requeridas para convocar el proceso de revocación de mandato. `);
            break;
        }
        else {
            alert(`No ingresaste un número válido.`);
            firmas = prompt("Ingresa el número de firmas reunidas");
        }

    }
}

function faltante(comprobar, diferencia) {
    comprobar = parseInt(listaNominal * 0.03);
    diferencia = parseInt(comprobar - firmas);
    if (diferencia > 0) {
        alert(`Faltan ${diferencia} firmas para convocar la revocación de mandato.`);
    }

    else if (diferencia <= 0){
        alert (`Ya no faltan firmas para cumplir con el requisito.`)
    }

}
function participacion (votacion){
votacion = parseInt(listaNominal * 0.4);
alert (`Para que sean vinculantes los resultados de la votación en la jornada de revocación de mandato, deberán participar, al menos, ${votacion} ciudadanas y ciudadanos.`)
}

validez();
faltante();
participacion();

