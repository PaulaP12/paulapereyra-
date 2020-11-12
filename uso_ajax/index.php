<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="estilos-sec.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ajax_XMLHttpRequest</title>
</head>
<body>
    <div class="container">
        <span class='texto'>Elige <b>País</b>:</span>

        <!--S.Paises-->
        <select id='pais' onchange="ajax();">
            <option value="" selected="selected">Seleccione...</option>
            <option value="Argentina">Argentina</option>
            <option value="Uruguay">Uruguay</option>
        </select>   

        <span class='texto'>Elige <b>Departamento</b>:</span>
        
        <!--S.Dptos/Provincias-->
        <select id='agregar'>
            <option value="-">...</option>
        </select>
        
        <br>
    </div>
    <script src="script.js"></script>
</body>
</html>