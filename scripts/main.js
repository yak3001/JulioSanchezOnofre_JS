const proceso2014 = 539799052;
const proceso2015 = 4196776135;
const partidos2015 = 5355522828;
const proceso2017 = 699534390;
const proceso2018 = 7144961645;
const partidos2018 = 4138727092;
const proceso2020 = 479250873;
const proceso2021 = 7861864517;
const partidos2021 = 7226003636;

const votos2015 = 39864082;
const votos2018 = 56611027;
const votos2021 = 49151320;
const listaNominal2015 = 83536377;
const listaNominal2018 = 89250881;
const listaNominal2021 = 93328771;

//FUNCIÓN PARA CALCULAR GASTO DE LAS ELECCIONES FEDERALES 2015
function gasto2015 (presupuesto2015) {
    presupuesto2015=(proceso2014+proceso2015+partidos2015);
    return presupuesto2015;
}
//FUNCIÓN PARA CALCULAR GASTO DE LAS ELECCIONES FEDERALES 2018
function gasto2018 (presupuesto2018) {
    presupuesto2018=(proceso2017+proceso2018+partidos2018);
    return presupuesto2018;
}
//FUNCIÓN PARA CALCULAR GASTO DE LAS ELECCIONES FEDERALES 2021
function gasto2021 (presupuesto2021) {
    presupuesto2021=(proceso2020+proceso2021+partidos2021);
    return presupuesto2021;
}

//FUNCION PARA CALCULAR COSTO DE CADA VOTO EN 2015
function costoVoto2015 (costoVoto2015) {
costoVoto2015 = gasto2015() / votos2015;
return costoVoto2015.toFixed(2); 

}
//FUNCION PARA CALCULAR COSTO DE CADA VOTO EN 2018
function costoVoto2018 (costoVoto2018) {
costoVoto2018 = gasto2018() / votos2018;
return costoVoto2018.toFixed(2); 

}
//FUNCION PARA CALCULAR COSTO DE CADA VOTO EN 2021
function costoVoto2021 (costoVoto2021) {
costoVoto2021 = gasto2021() / votos2021;
return costoVoto2021.toFixed(2); 

}

//FUNCIÓN PARA CALCULAR LA PARTICIPACIÓN CIUDADANA 2015
function participacion2015 (participacion2015) {
    participacion2015 = (votos2015/listaNominal2015)*100;
    return participacion2015.toFixed(2);
}
//FUNCIÓN PARA CALCULAR LA PARTICIPACIÓN CIUDADANA 2018
function participacion2018 (participacion2018) {
    participacion2018 = (votos2018/listaNominal2018)*100;
    return participacion2018.toFixed(2);
}
//FUNCIÓN PARA CALCULAR LA PARTICIPACIÓN CIUDADANA 2021
function participacion2021 (participacion2021) {
    participacion2021 = (votos2021/listaNominal2021)*100;
    return participacion2021.toFixed(2);
}
let fecha = prompt("Ingresa el año de la elección federal en México:\n\n Opciones válidas: 2015 - 2018 - 2021");

while (fecha != "ESC") {

if (fecha == 2015) {
    alert (`Con una participación ciudadana de ${participacion2015 ()}% en la elección federal de ${fecha}, el costo de cada voto fue de ${costoVoto2015()} pesos. `);
    fecha = prompt("Ingresa el año de la elección federal en México:\n\n Opciones válidas: 2015 - 2018 - 2021");
}
else if (fecha == 2018) {
    alert (`Con una participación ciudadana de ${participacion2018 ()}% en la elección federal de ${fecha}, el costo de cada voto fue de ${costoVoto2018()} pesos. `);
    fecha = prompt("Ingresa el año de la elección federal en México:\n\n Opciones válidas: 2015 - 2018 - 2021");
}
else if (fecha == 2021) {
    alert (`Con una participación ciudadana de ${participacion2021 ()}% en la elección federal de ${fecha}, el costo de cada voto fue de ${costoVoto2021()} pesos. `);
    fecha = prompt("Ingresa el año de la elección federal en México:\n\n Opciones válidas: 2015 - 2018 - 2021");
}
else {
    alert(`No ingresaste una opción válida.`);
    fecha = prompt("Ingresa el año de la elección federal en México:\n\n Opciones válidas: 2015 - 2018 - 2021");
}
}


