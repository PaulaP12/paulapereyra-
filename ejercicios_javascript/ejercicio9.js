function calculoEdad(){
	let a_nac = document.getElementById("i3").value;
	let a_actual= new Date();
	
	let edad_persona = a_actual.getFullYear() - a_nac;
	document.getElementById('ej9').innerHTML = edad_persona;

}