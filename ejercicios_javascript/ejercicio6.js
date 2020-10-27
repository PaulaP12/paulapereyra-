function randomnum() {
	let num_aleatorios = [];

	function obtenernumaleat(min, max) {
  		return Math.random() * (max - min) + min;
	}

	for (let i = 0; i < 10; i++) {
		let num =  Math.round(obtenernumaleat(1,99));
		num_aleatorios.push(num);
	}

	document.getElementById('ej6').innerHTML=num_aleatorios;
}

