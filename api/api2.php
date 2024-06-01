<?php
include('../models/claseDAO.php');
header("Content-Type: application/json");
$method = $_SERVER['REQUEST_METHOD'];
$class= new ClaseDAO();
switch($method){
    case 'GET':
        $resultado = $class->TraerClases();
        echo(json_encode($resultado));
        break;
        
    case 'POST':
        $data =json_decode(file_get_contents('php://input',true);
        $resultado=$clase->guardarClase($data['nombreClase'],$data['codigo']));
        echo json_encode($resultado);
        break;
}

// if ($method == 'GET'){
//     $data =json_decode(file_get_contents('php://input',true);
//     $resultado=$clase->guardarClase($data['nombreClase'],$data['codigo']));
//     echo json_encode($resultado);
// }
?>