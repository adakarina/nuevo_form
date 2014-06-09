<?php
include("conexion.php");
 
 $FRM = $_POST;

 $consulta = "SELECT * from usuario WHERE usuario='".$FRM['nombreses']."' and password='".$FRM['passwordses']."'";
 
 $resultado = mysql_query($consulta);
 
 if(mysql_num_rows($resultado)==1)
{
	while($row2 = mysql_fetch_array($resultado)) //apunta a una fila del arreglo y la guarda en $row2 
		{
			$cdatos[]=$row2;
		}
	//print_r($cdatos);
	echo $cdatos[0]['nivel'];
}
else
	echo 0;
 
 
?>