<?php
include ('../models/claseDAO.php');
$clase=new ClaseDAO();
$class=$clase->TraerClase($_GET['id']);
print_r(json_encode($class));
?>