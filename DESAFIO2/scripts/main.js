let entrada = prompt("En México, diversas autoridades estatales ya utilizan o planean adquirir tecnología de reconocimiento facial para vigilancia en espacios públicos, a pesar de que su uso se ha vinculado con detenciones arbitrarias y perfilamientos raciales. Consulta si tu entidad utiliza esta tecnología. Las opciones son:\n\nAGS | BC | BCS | CAMP | CHIS | CHIH | COAH | COL | CDMX | DGO | EDOMEX | GTO | GRO | HGO | JAL | MICH | MOR | NAY | NL | OAX | PUE | QRO | QROO | SLP | SIN | SON | TAB | TAMPS | TLAX | VER | YUC | ZAC ");
let entidad = entrada.toUpperCase();

if ((entidad == "AGS") || (entidad == "BCS") || (entidad == "COAH") || (entidad == "CDMX") || (entidad == "DGO") || (entidad == "EDOMEX") || (entidad == "GTO") || (entidad == "JAL") || (entidad == "QROO") || (entidad == "SIN") || (entidad == "SON") || (entidad == "ZAC"))
{
    alert(entidad + " " + "SÍ cuenta tecnología de reconocimiento facial")
}

else if ((entidad == "BC") || (entidad == "CAMP") || (entidad == "CHIS") || (entidad == "CHIH") || (entidad == "GRO") || (entidad == "HGO") || (entidad == "MICH") || (entidad == "MOR") || (entidad == "NAY") || (entidad == "NL") || (entidad == "OAX") || (entidad == "PUE") || (entidad == "TAB") || (entidad == "TLAX") || (entidad == "VER") || (entidad == "YUC"))

{
    alert(entidad + " " + "NO cuenta con tecnología de reconocimiento facial")
}
else if ((entidad == "COL") || (entidad == "SLP"))
{
    alert(entidad + " " + "No cuenta, pero PLANEA IMPLEMENTAR tecnología de reconocimiento facial")
}

else if ((entidad == "QRO") || (entidad == "TAMPS"))
{
    alert(entidad + " " + "se negó a entregar la información al clasificarla como 'RESERVADA'");
}
else {
    alert("¡No ingresaste una sigla válida!")
}


