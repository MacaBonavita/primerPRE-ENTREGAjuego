// Constants
const PREGUNTA_NOMBRE = "¿Cómo te llamas?";
const PREGUNTA_EDAD = "¿Cuántos años tienes?";
const MSJ_BIENVENIDA = "Hola, %nombre%! Tienes %edad% años.";
const MSJ_DESPEDIDA = "¡Hasta luego, %nombre%!";

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

// Main program
let nombre = obtenerRespuesta(PREGUNTA_NOMBRE);
let edad = parseInt(obtenerRespuesta(PREGUNTA_EDAD));

mostrarMensaje(MSJ_BIENVENIDA.replace('%nombre%', nombre).replace('%edad%', edad));

if (confirmarAccion("¿Quieres jugar a un juego?")) {
  mostrarMensaje("¡Genial! Vamos a adivinar un número.");

  let numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let intentos = 0;

  while (intentos < 3) {
    let adivinanza = parseInt(obtenerRespuesta("Adivina un número entre 1 y 10"));

    if (adivinanza === numeroSecreto) {
      mostrarMensaje("¡Lo has adivinado! ¡Felicidades!");
      break;
    } else {
      intentos++;
      mostrarMensaje(intentos < 3 ? "Inténtalo de nuevo." : "Lo siento, has perdido. El número era " + numeroSecreto);
    }
  }
}

mostrarMensaje(MSJ_DESPEDIDA.replace('%nombre%', nombre));