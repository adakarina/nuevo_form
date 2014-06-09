$(document).ready( function(){
var html = ''; //HTML a renderizar en terminado_form
var num = '19'; // Anios que comienzan en 19
var nem = '20'; // Anios que comienzan en 20
var prt = ''; // Variable que contiene los dos ultimos numeros del anio
    for(var i = 0; i <44 ; i++){ //ciclo que recorre los anios.
		if(i < 10) prt = '6'+i; // condicion para leer correctamente a partir de '1960' - coloca el 6 entre 19 y 0.
		else if(i < 40) prt = 60+i; // condicion suma 60 al anio cuando este llega a 1969
		else if(i < 50) prt = '0'+(i-40); // condicion antepone el '0' cuando el anio llega a 1999 y resta 40 para que empiece en 2000
		
		if(i < 40) html += '<option value="'+num+prt+'">'+num+prt+'</option>'; // concatena el recorrido para el value si el anio empieza en 1900
		else html += '<option value="'+nem+prt+'">'+nem+prt+'</option>' //concatena el recorrido para el value si el anio empieza en 2000
	}
	$('#anionac').append(html); //append agrega al final de la etiqueta. No sobreescribe el contenido.
	//$("#form_izq").hide();
	//$("#form_der").hide();
	var form1 = $('#frmDatosPersonales');
	var btnenviarDatosPersonales = $('#btnDatosPersonales');
	
	var form2 = $('#form_der');
	//form2.hide();
	var btnMedica = $('#btnMedica');
	
	var form3 = $('#frm_down');
	//form3.hide();
	var btnEstudios = $('#btnEstudios');
	
	 $('#btnDatosPersonales').click(function(){
		//console.log('Evento SUBMIT');
		if(enviarDatosPersonales(form1)){
			var ArrayForm = form1.serialize();
			$.ajax({
				url: "consultas.php",
				type: "POST",
				data: ArrayForm,
				success: function(datos){					
						if(datos==1)
						{
							alert("Registro exitoso");
							$('#form_der').show();
							$('#frm_down').show();
							$('#CEDULAM').val( $('#ci').val() );
							$('#CEDULAE').val( $('#ci').val());
						}
						else
							alert("Problemas con el registro");
							
							
				},
				error: function(){ alert('Error'); }
				});
		}
	});
	
	$('#btnMedica').click(function(){
		//console.log('Evento SUBMIT');
		if(enviarFichaMedica(form2)){
			var ArrayForm = form2.serialize();
			$.ajax({
				url: "consultas.php",
				type: "POST",
				data: ArrayForm,
				success: function(datos){
					alert(datos);						
						if(datos==1)
						{
							alert("Registro exitoso");
							$('#form_der').show();
							$('#frm_down').show();
							$('#CEDULAM').val( $('#ci').val() );
							$('#CEDULAE').val( $('#ci').val());
						}
						else
							alert("Problemas con el registro");
							
							
				},
				error: function(){ alert('Error'); }
				});
		}
	});
	
	$('#btnEstudios').click(function(){
		//console.log('Evento SUBMIT');
		if(enviarDatosEstudios(form3)){
			var ArrayForm = form3.serialize();
			$.ajax({
				url: "consultas.php",
				type: "POST",
				data: ArrayForm,
				success: function(datos){
						
						alert(datos);
						
						if(datos==1)
						{
							alert("Registro exitoso");
							$('#form_der').show();
							$('#frm_down').show();
							$('#CEDULAM').val( $('#ci').val() );
							$('#CEDULAE').val( $('#ci').val());
						}
						else
							alert("Problemas con el registro");
							
							
				},
				error: function(){ alert('Error'); }
				});
		}
	});
	/*
	form2.click(function(){

		enviarFichaMedica(form2);
		
	});
*/
	form3.submit(function(){

		enviarDatosEstudios(form3);
		
	});
	
});


function enviarDatosPersonales(form){
	
	/*
	$ Fin de la Expresion
	^ Inicio de la Expresion
	{n} Exactamente n case
	{n,m} Entre n y m
	+ Al menos un caracter
	? cero o mas caracteres (valor opcional)	
	*/
	var alpha_Regex = /^([a-zA-Z])+$/; //Admite caracteres alfabeticos minus-mayus. += al menos un caracter
	var num_Regex = /^([0-9])+$/;
	var cedula_Regex = /^([0-9]){7,8}$/;
	var telefono_Regex = /^((416|426|414|424|412){1}([0-9]){7})$/;
	var oficina_Regex = /^(2){1}([0-9]){2}([0-9]){7}$/;
	
	if($('#nombre').val() == ''){
		$.jGrowl ('El campo nombre no puede estar vacío');
		return false;
	}
	else if(!$('#nombre').val().match(alpha_Regex)){
		$.jGrowl ('Especifique un nombre válido en el formulario');
		return false;
	}
	else if($('#apellido').val() == '')
	{
		$.jGrowl ('Especifique un apellido');
		return false;
	}
	else if (!$('#apellido').val().match(alpha_Regex)){
		$.jGrowl ('Solo se admiten letras en el campo Apellido');
		return false;
	}
	else if ($('#ci').val()==''){
		$.jGrowl ('Especifique una cedula');
		return false;
	}
	else if (!$('#ci').val().match(cedula_Regex)){
		$.jGrowl ('Solo se admiten numeros en el Campo Cedula');
		return false;
	}
	else if ($('#tlf').val() == ''){
		$.jGrowl ('Especifique un telefono');
		return false;
	}
	else if (!($('#tlf').val().match(telefono_Regex) || $('#tlf').val().match(oficina_Regex))){
		$.jGrowl ('Especifique un telefono válido');
		return false;
	}
	else{
		return true;
	}

}

function enviarFichaMedica(){

	var alpha_Regex = /^([a-zA-Z])+$/; //Admite caracteres alfabeticos minus-mayus. += al menos un caracter
	var num_Regex = /^([0-9])+$/;
	var cedula_Regex = /^([0-9]){7,8}$/;
	var telefono_Regex = /^((416|426|414|424|412){1}([0-9]){7})$/;
	var oficina_Regex = /^(2){1}([0-9]){2}([0-9]){7}$/;

	if($('#sangre').val() == 'null'){
		$.jGrowl('Seleccione un tipo de sangre');
		return false;
	}
	else if(!$('input[name=factorrh]').is(':checked')){
		$.jGrowl('Seleccione un factor RH');
		return false;
	}
	else if(($('#hernias').is(':checked')) && ((!$('#id').is(':checked')) ||(!$('#ii').is(':checked')) ||(!$('#fem').is(':checked')) ||(!$('#inc').is(':checked')) ||(!$('#umb').is(':checked')) ||(!$('#epig').is(':checked')) || ($('#otro').val() == ''))){
		$.jGrowl('Debe indicar un tipo de Hernia');
		return false;
	}	
	else if(!($('#hernias').is(':checked')) && (($('#id').is(':checked')) ||($('#ii').is(':checked')) ||($('#fem').is(':checked')) ||($('#inc').is(':checked')) ||($('#umb').is(':checked')) ||($('#epig').is(':checked')) || ($('#otro').val() != ''))){
		console.log('Prueba de Hernias 2.5');
		$.jGrowl('Debe chequear que existe una hernia');
		return false;
	}
	else if(($('#alergias').is(':checked')) && (($('#esp1').val() == '') && ($('#esp2').val() == '') && ($('#esp3').val() == '') && ($('#esp4').val() == ''))){
		$.jGrowl('Debe indicar al menos un tipo de alergia');
		return false;
	}	
	else if((!($('#alergias').is(':checked'))) && ((!$('#esp1').val() == '') || (!$('#esp2').val() == '') || (!$('#esp3').val() == '') || (!$('#esp4').val() == ''))){
		$.jGrowl('Debe chequear que existe una alergia');
		return false;
	}
	else if(($('#fract').is(':checked')) && (($('#esp5').val() == '') && ($('#esp6').val() == '') && ($('#esp7').val() == '') && ($('#esp8').val() == ''))){
		$.jGrowl('Debe indicar al menos un tipo de fractura');
		return false;
	}	
	else if((!($('#fract').is(':checked'))) && ((!$('#esp5').val() == '') || (!$('#esp6').val() == '') || (!$('#esp7').val() == '') || (!$('#esp8').val() == ''))){
		$.jGrowl('Debe chequear que existe una fractura');
		return false;
	}
	else{
		return true;
	}
/*
	if((($('#otro').val() != '')||(!$('#ii').is(':checked'))||(!$('#id').is(':checked'))||(!$('#fem').is(':checked'))||(!$('#inc').is(':checked'))||(!$('#umb').is(':checked'))||(!$('#epig').is(':checked')))){
		$.jGrowl ('Especifique tipo de hernia o desmarque la sección "Hernias"');
		return false;
	}

	else if(!$('#otro').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
	}
	else if($('#esp1').val() != '' && $('#alergias').is(':checked')){
		$.jGrowl ('Especifique alergia o desmarque la sección "Alergias"');
		return false;
	}
	else if(!$('#esp1').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
	}
	else if($('#esp2').val() != '' && $('#alergias').is(':checked')){
		$.jGrowl ('Especifique alergia o desmarque la sección "Alergias"');
		return false;
	}
	else if(!$('#esp2').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
	}
	else if($('#esp3').val() != '' && $('#alergias').attr('checked') == 'checkced'){
		$.jGrowl ('Especifique alergia o desmarque la sección "Alergias"');
		return false;
	}
	else if(!$('#esp3').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
	}
	else if($('#esp4').val() != '' && $('#alergias').attr('checked') == 'checkced'){
		$.jGrowl ('Especifique alergia o desmarque la sección "Alergias"');
		return false;
	}
	else if(!$('#esp4').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
	}
	
	else if($('#esp5').val() != '' && $('#fract').attr('checked') == 'checkced'){
		$.jGrowl ('Especifique fractura o desmarque la sección "Fracturas"');
		return false;
	}
	else if(!$('#esp5').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
	}
	else if($('#esp6').val() != '' && $('#fract').attr('checked') == 'checkced'){
		$.jGrowl ('Especifique fractura o desmarque la sección "Fracturas"');
		return false;
	}
	else if(!$('#esp6').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
	}
	else if($('#esp7').val() != '' && $('#fract').attr('checked') == 'checkced'){
		$.jGrowl ('Especifique fractura o desmarque la sección "Fracturas"');
		return false;
	}
	else if(!$('#esp7').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
	}
	else if($('#esp8').val() != '' && $('#fract').attr('checked') == 'checkced'){
		$.jGrowl ('Especifique fractura o desmarque la sección "Fracturas"');
		return false;
	}
	else if(!$('#esp8').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
	}
	*/	
	/* AQUI VAN LAS EXPRESIONES REGULARES PARA RADIOBUTTONS*/
	
	
}

function enviarDatosEstudios(form3){

	if($('#prim1').val() == ''){
		$.jGrowl('Especifique una escuela primaria');
		return false;
	}
	else if(!$('#prim1').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
		
		}
	else if(!$('#prim2').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
		}
	else if(!$('#prim3').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
		}
		if($('#sec1').val() == ''){
		$.jGrowl('Especifique una escuela secundaria');
		return false;
		}
	else if(!$('#sec1').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
		
		}
	else if(!$('#sec2').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
		}
	
	else if(!$('#sec3').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
		}
		
		if($('#titulo1').val() == ''){
		$.jGrowl('Especifique título bachillerato');
		return false;
	}
	else if(!$('#titulo1').val().match(alpha_Regex)){
		$.jGrowl('Solo se admiten letras');
		return false;
		}

	

}

/*

function enviarDatosPersonales(form){

	var ArrayForm = form.serialize();
	$.ajax({
		url: "consultas.php",
		type: "POST",
		data: ArrayForm,
		success: function(datos){
				
				$.jGrowl(datos);
				
				if(datos==1)
				{
					$.jGrowl("Registro exitoso");
					$('#form_der').show();
					$('#frm_down').show();
					$('#CEDULAM').val( $('#ci').val() );
					$('#CEDULAE').val( $('#ci').val());
				}
				else
					$.jGrowl("Problemas con el registro");
					
					
		},
		error: function(){ $.jGrowl('Error'); }
		});
*/
