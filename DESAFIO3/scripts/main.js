let entrada = prompt("¿Quieres saber cuáles son tus números de la suerte? Ingresa tu nombre");
let zodiaco = prompt("Ingresa tu signo zodiacal");
let nombre = entrada.toUpperCase();
let signo = zodiaco.toUpperCase();

while (nombre != "ESC") {
    switch (signo) {
        case "ARIES":
            alert(`¡Hola ${nombre}! Tus números de la suerte son: 1-11-15-21-26-47`);
            break;
        case "TAURO":
            alert(`¡Hola ${nombre}! Tus números de la suerte son: 1-14-26-27-33-35`);
            break;
        case "GEMINIS":
            alert(`¡Hola ${nombre}! Tus números de la suerte son: 14-22-30-31-42-44`);
            break;
        case "CANCER":
            alert(`¡Hola ${nombre}! Tus números de la suerte son: 4-7-9-31-36-40`);
            break;
        case "LEO":
            alert(`¡Hola ${nombre}! Tus números de la suerte son: 7-8-9-14-39-41`);
            break;
        case "VIRGO":
            alert(`¡Hola ${nombre}! Tus números de la suerte son: 10-16-23-44-45-46`);
            break;
        case "LIBRA":
            alert(`¡Hola ${nombre}! Tus números de la suerte son: 16-17-26-29-45-47`);
            break;
        case "ESCORPIO":
            alert(`¡Hola ${nombre}! Tus números de la suerte son: 10-12-15-26-32-43`);
            break;
        case "SAGITARIO":
            alert(`¡Hola ${nombre}! Tus números de la suerte son: 19-21-26-31-45-49`);
            break;
        case "CAPRICORNIO":
            alert(`¡Hola ${nombre}! Tus números de la suerte son: 8-30-31-33-38-48`);
            break;
        case "ACUARIO":
            alert(`¡Hola ${nombre}! Tus números de la suerte son: 4-8-11-24-38-42`);
            break;
        case "PISCIS":
            alert(`¡Hola ${nombre}! Tus números de la suerte son: 14-15-21-23-39-48`);
            break;

        default:
            alert("No ingresaste un signo válido.")
            break;
    }
    switch (nombre) {
        case "CARLOS":
            alert("Pinche Farías, a ti ya te cargó la verga.");
            break;
    }
    entrada = prompt("¿Quieres saber cuáles son tus números de la suerte?. Ingresa tu nombre (sin acentos)");
    zodiaco = prompt("Ingresa tu signo zodiacal");
    nombre = entrada.toUpperCase();
    signo = zodiaco.toUpperCase();

}
