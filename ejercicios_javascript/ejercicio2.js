function sumar2num() {
  //Consig: Mediante un botón sumar dos números y mostrarlo en un alert
  document.getElementById("boton2");
  let num1 = prompt("1° número a sumar:");
  let num2 = prompt("2° número a sumar:");

  let suma;
  suma = parseInt(num1) + parseInt(num2);
  alert(suma);
}