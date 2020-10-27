function mostrar_valor(opcion){
	
	if (opcion=='1') {
		let rbtn1 = document.getElementById('br1').value;
		document.getElementById('ej10a').innerHTML = rbtn1;
	}else{
		if (opcion=='2') {
			let rbtn2 = document.getElementById('br2').value;
			document.getElementById('ej10b').innerHTML = rbtn2;
		}else{
			let rbtn3 = document.getElementById('br3').value;
			document.getElementById('ej10c').innerHTML = rbtn3;
		}
	}
	
}