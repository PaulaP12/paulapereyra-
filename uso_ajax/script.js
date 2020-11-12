function ajax() {
	
	let p = document.getElementById('pais');
	let ps = p.value;  //Del select que contiene los paises, se toma el valor del seleccionado.

	let s=document.getElementById('agregar'); //Select de provincias-departamentos

	let conexion;
	conexion = new XMLHttpRequest();
	conexion.open("GET","datos.php?c="+ps,true);

	//Si el select tiene options se elimina.
	if (s.length>0) {
		s.length=0; 	
	}

	conexion.onload = function(){
		if(conexion.status === 200){

			let json = JSON.parse(conexion.responseText);

			//Dependiendo de que país sea la lista de provincias,se agrega un option con cada valor.
			if (ps=='Argentina') {
				for (var i = 0; i < 23; i++) {
					var option=document.createElement("option");
					option.value=json[i];
					option.text=json[i];
					s.appendChild(option);
				}
			}else{
				for (var i = 0; i < 19; i++) {
					var option=document.createElement("option");
					option.value=json[i];
					option.text=json[i]; 
					s.appendChild(option);
				}
			}

			//Para verificar que país se seleccionó y muestra en formato JSON sus provincias/dtos.
			console.log(ps);
			console.log(json);
		}
	}

	conexion.send();
}