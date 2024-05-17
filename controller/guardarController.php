<?php
include ('../models/claseDAO.php');
$clase = new claseDAO();
if($_REQUEST['id']==''){
    $clase->guardarClase($_REQUEST['nombre'],$_REQUEST['email'],$_REQUEST['telefono'],$_REQUEST['direccion'])
}else{
    $clase->actualizarClase($_REQUEST['id'],$_REQUEST['nombre'],$_REQUEST['email'],$_REQUEST['telefono'],$_REQUEST['direccion'])
}
?>