<?php 

include("../conexion.php");

$FRM = $_POST;

$row = mysql_query("SELECT * FROM `rescatista` WHERE(`CI` = '".$FRM['input-busqueda']."');");

if($row){
	$usuario = array();

	while($data = mysql_fetch_array($row, MYSQL_BOTH)){

		$usuario = $data;
		
	}

	echo json_encode($usuario);
}
else
	echo false;
/*
*/
?>