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
  if (input.value === '') {
    alert("Ingrese el primer número.");
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

  if (input.value === '' || primerNumero === null || operacion === null) {
    alert("Completa ambos números y una operación.");
    return;
  }

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

  document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
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
