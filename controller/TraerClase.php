<?php
include ('../models/claseDAO.php');
$clase=new ClaseDAO();
$class=$clase->TraerClases();
print_r(json_encode($class));
?>