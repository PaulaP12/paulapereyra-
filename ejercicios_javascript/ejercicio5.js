function sumar2num2(){
	let num1 = prompt("1° número a sumar:");
  	let num2 = prompt("2° número a sumar:");
  	let suma;
  	suma = parseInt(num1) + parseInt(num2);

  	document.getElementById('boton4').innerHTML=suma;
}