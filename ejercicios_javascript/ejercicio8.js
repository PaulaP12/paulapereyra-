function MostrarSaludo(){

	let nombre = document.getElementById("i1").value;
	let apellido = document.getElementById("i2").value;
	let inicio = "Hola, ";

	document.getElementById('ej8').innerHTML = inicio.concat(nombre," ",apellido,".");
}

