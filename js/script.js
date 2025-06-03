// Variables globales
let primerNumero = null;
let operacion = null;

// Agrega dígitos al input
function agregarNumero(num) {
  const input = document.getElementById('inputNumero');
  input.value += num;
}

// Selecciona la operación a realizar
function seleccionarOperacion(op) {
  const input = document.getElementById('inputNumero');
  // Valida que se ingrese el primer número de la operación
  if (input.value === '') {
    alert("Debe ingresar el primer número para calcular.");
    return;
  }

  primerNumero = parseFloat(input.value);
  operacion = op;

  document.getElementById('operacionActual').textContent = `Operación seleccionada: ${op}`;
  input.value = '';
}

// Realiza el cálculo
function calcular() {
  const input = document.getElementById('inputNumero');
  const segundoNumero = parseFloat(input.value);
// Valida que haya ingresado los 2 números y la operación
  if (input.value === '' || primerNumero === null || operacion === null) {
    alert("Error: Debe ingresar ambos números y una operación.");
    return;
  }
// Valida las divisiones por cero
  if (operacion === '/' && segundoNumero === 0) {
    alert("Error: No se puede dividir por cero.");
    limpiar();
    return;
  }

  let resultado = 0;

  switch (operacion) {
    case '+':
      resultado = primerNumero + segundoNumero;
      break;
    case '-':
      resultado = primerNumero - segundoNumero;
      break;
    case '*':
      resultado = primerNumero * segundoNumero;
      break;
    case '/':
      resultado = primerNumero / segundoNumero;
      break;
  }

  document.getElementById('resultado').textContent = `El Resultado es: ${resultado}`;
  document.getElementById('operacionActual').textContent = '';
  document.getElementById('inputNumero').value = '';
  primerNumero = null;
  operacion = null;
}

// Limpia la pantalla
function limpiar() {
  document.getElementById('inputNumero').value = '';
  document.getElementById('operacionActual').textContent = '';
  document.getElementById('resultado').textContent = '';
  primerNumero = null;
  operacion = null;
}
