// Constants
const PREGUNTA_NOMBRE = "¿Cómo te llamas?";
const PREGUNTA_EDAD = "¿Cuántos años tienes?";
const MSJ_BIENVENIDA = "Hola, %nombre%! Tienes %edad% años.";
const MSJ_DESPEDIDA = "¡Hasta luego, %nombre%!";
const PREGUNTA_JUGAR = "¿Quieres jugar a un juego?";
const JUGAR_OPCION_SI = "¡Genial! Vamos a adivinar un número.";
const JUGAR_OPCION_NO = "Lo siento, no podemos jugar ahora.";
const MSJ_GAME_OVER = "Lo siento, has perdido. El número era %numeroSecreto%.";
const MSJ_ADIVINASTE = "¡Lo has adivinado! ¡Felicidades!";
const MSJ_INTENTA_DE_NUEVO = "Inténtalo de nuevo.";

// Functions
function mostrarMensaje(mensaje) {
  alert(mensaje);
}

function obtenerRespuesta(pregunta) {
  return prompt(pregunta);
}

function confirmarAccion(pregunta) {
  return confirm(pregunta);
}

function sumarArrays(array1, array2) {
  return array1.map((element, index) => element + array2[index]);
}

function reemplazarValores(plantilla, paramValores) {
  return plantilla.replace(/%(\w+)%/g, (match, key) => paramValores[key]);
}

function adivinarNumero(intentosMaximos) {
  let intentos = 0;
  let numeroSecreto = Math.floor(Math.random() * 10) + 1;

  while (intentos < intentosMaximos) {
    let adivinanza = parseInt(obtenerRespuesta("Adivina un número entre 1 y 10"));
    if (adivinanza === numeroSecreto) {
      return true;
    }
    intentos++;
  }
  mostrarMensaje(MSJ_GAME_OVER.replace('%numeroSecreto%', numeroSecreto));
  return false;
}

// Main program
let userInput = [obtenerRespuesta(PREGUNTA_NOMBRE), parseInt(obtenerRespuesta(PREGUNTA_EDAD))];

mostrarMensaje(reemplazarValores(MSJ_BIENVENIDA, { nombre: userInput[0], edad: userInput[1] }));

if (confirmarAccion(PREGUNTA_JUGAR)) {
  mostrarMensaje(JUGAR_OPCION_SI);
  if (adivinarNumero(3)) {
    mostrarMensaje(MSJ_ADIVINASTE);
  }
} else {
  mostrarMensaje(JUGAR_OPCION_NO);
}

mostrarMensaje(reemplazarValores(MSJ_DESPEDIDA, { nombre: userInput[0] }));