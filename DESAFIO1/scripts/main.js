
let sueldo= prompt("¿Eres una persona servidora pública en México? Conoce cuánto te corresponde de aguinaldo. Solo ingresa tu sueldo bruto quincenal (en números y sin comas)")
let aguinaldo= Number(sueldo/15)*40;
alert("Por Ley, el aguinaldo es equivalente a 40 días de sueldo. A ti te corresponde" +" "+parseInt(aguinaldo)+" "+"pesos.");
