<?php
include("../conexion.php");
 
 $FRM = $_POST;
//print_r($FRM); 

 if($FRM['identificador']=="personales")
 {
	$fechaNac=$FRM['anionac']."/".$FRM['mesnac']."/".$FRM['dianac'];
	$txtConsulta = "INSERT INTO rescatista(CI, NOMBRE, APELLIDO,FECHA_NAC, LUGAR_NACIMIENTO, EMAIL, FACEBOOK, TELEFONO, TELEFONO_EMERGENCIA, DIRECCION) VALUES(".$FRM['ci'].", '".$FRM['nombre']."', '".$FRM['apellido']."', '".$fechaNac."', '".$FRM['lugarnac']."', '".$FRM['email']."', '".$FRM['fb']."', ".$FRM['tlf'].", ".$FRM['tlfemerg'].", '".$FRM['direccion']."')";
 }
 if($FRM['identificador']=="medica")
 {
 
	if(isset($FRM['hernias']) and $FRM['hernias']=="hernias")
	{
		 $FRM['id'] = (isset($FRM['id']))?$FRM['id']:"";
		 $FRM['ii'] = (isset($FRM['ii']))?$FRM['ii']:"";
		 $FRM['fem'] = (isset($FRM['fem']))?$FRM['fem']:"";
		 $FRM['inc'] = (isset($FRM['inc']))?$FRM['inc']:"";
		 $FRM['umb'] = (isset($FRM['umb']))?$FRM['umb']:"";
		 $FRM['epig'] = (isset($FRM['epig']))?$FRM['epig']:"";
		 		 
		$SUF_HERN = $FRM['id'] ."-". $FRM['ii'] ."-". $FRM['fem'] ."-". $FRM['inc'] ."-". $FRM['umb'] ."-". $FRM['epig'] ."-". $FRM['otro'];
	}
	else
	{
		 $FRM['hernias']=""; $SUF_HERN="";
	}
	if(isset($FRM['alergias']) and $FRM['alergias']=="alergias")
	{
		$SUF_ALERGIAS = $FRM['esp1'] ."-". $FRM['esp2'] ."-". $FRM['esp3'] ."-". $FRM['esp4'];
	}
	else
	{
		$FRM['alergias']="";
		$SUF_ALERGIAS="";
	}
	if(isset($FRM['fract']) and $FRM['fract']=="fractura")
	{
		$SUF_FRACTURAS = $FRM['esp5'] ."-". $FRM['esp6'] ."-". $FRM['esp7'] ."-". $FRM['esp8'];
	}
	else
	{
		$FRM['fract']="";
		$SUF_FRACTURAS="";
	}
	if(!isset($FRM['tension']))
	{
		$FRM['tension']="";
		$FRM['vtension']="";
	}
 
	$txtConsulta= "INSERT INTO f_medica (G_SANGRE, F_RH, SUF_HERNIAS, ESP_HERNIAS, SUF_TENSION, ESP_TENSION, SUF_ALERGIAS, ESP_ALERGIAS, SUF_FRACTURAS, ESP_FRACTURAS, CI, FARMACO1, DOSIS1, FREC1, FARMACO2, DOSIS2, FREC2) VALUES ('".$FRM['sangre']."', '".$FRM['factorrh']."', '".$FRM['hernias']."', '".$SUF_HERN."', '".$FRM['tension']."', '".$FRM['vtension']."','".$FRM['alergias']."', '".$SUF_ALERGIAS."', '".$FRM['fract']."', '".$SUF_FRACTURAS."',".$FRM['CEDULAM'].",'".$FRM['esp9']."',".$FRM['dosis1'].",".$FRM['frph1'].",'".$FRM['esp10']."',".$FRM['dosis2'].",".$FRM['frph2'].")";
	
 }
 if($FRM['identificador']=="estudios")
 {
	$primaria = $FRM['prim1']."-".$FRM['prim2']."-".$FRM['prim3'];
	$secundaria = $FRM['sec1']."-".$FRM['sec2']."-".$FRM['sec3'];
	$universitaria = $FRM['univ1']."-".$FRM['univ2'].$FRM['univ3'];
	$titulo_univ = $FRM['titulo2']."-".$FRM['titulo3'].$FRM['titulo4'];
	
	$txtConsulta = "INSERT INTO educacion (PRIMARIA, SECUNDARIA, TITULO_SEC, UNIVERSITARIA, TITULO_UNIV, CI) VALUES( '".$primaria."', '".$secundaria."', '".$FRM['titulo1']."','".$universitaria."','".$titulo_univ."','".$FRM['CEDULAE']."')";
 }
 
  
 $resultado = mysql_query($txtConsulta);
 
 if($resultado == 1)
	echo 1; //Se guardo correctamente
else
	echo 0 . mysql_error(); // No Se guardo correctamente

 
 //print_r($FRM);
 
 /*
 $fechaNac=$FRM['anionac']."/".$FRM['mesnac']."/".$FRM['dianac'];
 
 
 
 $DatosP = "INSERT INTO rescatista(CI, NOMBRE, APELLIDO,FECHA_NAC, LUGAR_NAC, EMAIL, FACEBOOK, TELEFONO, TELEFONO_EMERGENCIA, DIRECCION) VALUES(".$FRM['ci'].", '".$FRM['nombre']."', '".$FRM['apellido']."''".$FRM['lugarnac']."','"$fechaNac."','".$FRM['email']."',".$FRM['fb'].",".$FRM['tlf'].",".$FRM['tlfemerg'].",".$FRM['direccion'].")";
 $FMedica= "ISERT INTO f_medica (G_SANGRE, F_RH, SUF_HERNIAS, ESP_HERNIAS, SUF_TENSION, ESP_TENSION, SUF_ALERGIAS, ESP_ALERGIAS, SUF_FRACTURAS, ESP_FRACTURAS, CI) VALUES (".$FRM['sangre'].")";
 
 $resultado = mysql_query($DatosP);
 
 if($resultado == 1)
	echo 1; //Se guardo correctamente
else
		0; // No Se guardo correctamente

 
 /*
 
  
  $FRM['ci']
  $FRM['nombre']
  $FRM['apellido']
  
  $FRM['lugarnac']
  $FRM['email']
  $FRM['fb']
  $FRM['tlf']
  $FRM['tlfemerg']
  $FRM['direccion']
  
  $FRM['dianac']
  $FRM['mesnac']
  $FRM['anionac']
  
  */
  
  /*
  $FRM['sangre']
  */
 

 
 
 
 
 
?>