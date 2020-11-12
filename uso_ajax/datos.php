<?php
    //Pais seleccionado
    $pais= $_GET['c'];

    //Provincias argentinas
    $prarg = array("Buenos Aires","Catamarca","Chaco","Chubut","Cordoba","Corrientes","Entre Rios","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquen","Rio Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego","Tucuman");

    //Departamentos Uruguay
    $dptouru = array("Artigas","Canelones","Cerro Largo","Colonia","Durazno", "Durazno","Florida","Lavalleja","Maldonado","Montevideo","Paysandu","Rio Negro","Rivera","Rocha","Salto","San Jose","Soriano", "Tacuarembo","Treinta y Tres");

    //Dependiendo el pais elegido se envia el array correspondiente.
    if ($pais=="Argentina") {
        echo json_encode($prarg);
    }else {
        echo json_encode($dptouru);
    }
?>